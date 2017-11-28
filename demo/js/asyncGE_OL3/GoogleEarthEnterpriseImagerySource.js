(function () {
    ol.tilegrid.extentFromProjection = function(projection) {
      projection = ol.proj.get(projection);
      var extent = projection.getExtent();
      if (!extent) {
        var half = 180 * ol.proj.METERS_PER_UNIT[ol.proj.Units.DEGREES] /
            projection.getMetersPerUnit();
        extent = ol.extent.createOrUpdate(-half, -half, half, half);
      }
      return extent;
    };
    ol.source.googleEarthImagery = function (opt_options) {
        if(!Cesium){
            console.log("error: Cesium.js is required");
        }
        var options = opt_options || {};
        if(!options.url && options.url === ''){
            console.log("error: url is required!");
            return ;
        }
        var projection = options.projection !== undefined ? options.projection : 'EPSG:4326';
        var that = this;
        this._providerReady = false;
        this.googleEarthProvider_ = new Cesium.GoogleEarthEnterpriseImageryProvider({
            //url: 'http://localhost:8080/GeauthForward/Geauth'
            //url: 'http://khmdb.google.com'
            //url: 'http://www.earthenterprise.org/3d'
            url: options.url
        });
        this._readyPromise = this.googleEarthProvider_.readyPromise.then(function (result) {
           that._providerReady = result;
        });

        var cesium = this.googleEarthProvider_;
        options.cesium = this.googleEarthProvider_;
        var tileSize = [256, 256];
        var maximumLevel = 18;
        if (cesium._tileWidth) {
            if(cesium._tileHeight){
                tileSize = [cesium._tileWidth, cesium._tileHeight];
            }else{
                tileSize = [cesium._tileWidth, 256];
            }
        }
        if (cesium._maximumLevel) {
            maximumLevel = cesium.tilingScheme_ instanceof Cesium.GeographicTilingScheme ? cesium._maximumLevel + 1 : cesium._maximumLevel;
        }
        var sourceProjection = ol.proj.get('EPSG:4326');
        sourceProjection = projection;//options设置的
        var extent = ol.tilegrid.extentFromProjection(sourceProjection);
        var tileGrid = options.tileGrid !== undefined ? options.tileGrid :
            ol.tilegrid.createXYZ({
                extent: [-180,-180,180,180],//Google Earth与正常的范围不同
                maxZoom: maximumLevel,
                minZoom: options.minZoom,
                tileSize: tileSize
            });


        this.hidpi_ = options.hidpi !== undefined ? options.hidpi : false;
        ol.source.TileImage.call(this, {

            attributions: options.attributions,
            cacheSize: options.cacheSize,
            crossOrigin: options.crossOrigin,
            logo: options.logo,
            opaque: options.opaque,
            projection: sourceProjection,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileGrid: tileGrid,
            //state: ol.source.State.LOADING,
            tileLoadFunction: this.tileLoadFunction,
            //tilePixelRatio: this.hidpi_ ? 2 : 1,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: this.tileUrlFunction,
            wrapX: options.wrapX !== undefined ? options.wrapX : true,
            transition: options.transition
        });
        this.tileUrlFunction = function (urlTileCoord, pixelRatio, projection) {
            if(!urlTileCoord){
                return undefined;
            }
            var request = new Cesium.Request({
                throttle: false,
                throttleByServer: false,
                type: 1,
                priorityFunction: function () {

                }
            });
            var z_ = urlTileCoord[0];
            var x = urlTileCoord[1];
            var y_ = urlTileCoord[2];
            var level = options.cesium._tilingScheme instanceof Cesium.GeographicTilingScheme ? z_ - 1 : z_;
            if(level <= 0){
                level = 0;
            }
            var y = -y_ - 1;
            var r = options.cesium._readyPromise;
            options.cesium._ready = true;
           /* r.then(function (result) {
                options.cesium._ready = result;
            });*/
            var invalidImage = options.cesium._tileDiscardPolicy._image; // Empty image or undefined depending on discard policy
            var metadata = options.cesium._metadata;
            var quadKey = tileXYToQuadKey(x, y, level);
            var info = metadata.getTileInformation(x, y, level);
            if (!defined(info)) {
                if (metadata.isValid(quadKey)) {
                    var metadataRequest = new Cesium.Request({
                        throttle : request.throttle,
                        throttleByServer : request.throttleByServer,
                        type : request.type,
                        priorityFunction : request.priorityFunction
                    });
                    var promise_populate = metadata.populateSubtree(x, y, level, metadataRequest);
                    promise_populate.then(function (value) {
                        info = metadata.getTileInformation(x, y, level);
                        if (!defined(info))
                            return undefined; // No metadata so return undefined so we can be loaded later
                    });

                }
                info = metadata.getTileInformation(x, y, level);
                if (!defined(info))
                    return undefined; // Image doesn't exist
            }

            if (!info.hasImagery()) {
                // Already have info and there isn't any imagery here
                return undefined;
            }
            // Load the
            var url = buildImageUrl(options.cesium, info, x, y, level);
            return url;
        };
        this.tileLoadFunction = function (imageTile, src) {
            //console.log(src);
            if(typeof src != 'string'){
                //imageTile.getImage().src = undefined;
                return ;
            }
            var promise = Cesium.loadArrayBuffer(src, undefined, undefined);
            if (!defined(promise)) {
                return ; // Throttled
            }

            promise
                .then(function (image) {
                    var metadata = options.cesium._metadata;
                    Cesium.decodeGoogleEarthEnterpriseData(metadata.key, image);
                    var a = new Uint8Array(image);
                    var type;

                    var protoImagery = metadata.protoImagery;
                    if (!defined(protoImagery) || !protoImagery) {
                        type = getImageType(a);
                    }

                    if (!defined(type) && (!defined(protoImagery) || protoImagery)) {
                        var message = decodeEarthImageryPacket(a);
                        type = message.imageType;
                        a = message.imageData;
                    }

                    if (!defined(type) || !defined(a)) {
                        //不存在图片
                        //return invalidImage;
                        //imageTile.getImage().src = undefined;
                        return ;
                    }

                    //imageTile.getImage().src =  Cesium.loadImageFromTypedArray(a, type);
                    //>>includeStart('debug', pragmas.debug);
                    Cesium.Check.typeOf.object('uint8Array', a);
                    Cesium.Check.typeOf.string('format', type);
                    //>>includeEnd('debug');

                    var blob = new Blob([a], {
                        type: type
                    });
                    imageTile.getImage().src = window.URL.createObjectURL(blob);
                });

            //imageTile.getImage().src = "test.jpg";
        }

    };
    ol.inherits(ol.source.googleEarthImagery, ol.source.TileImage);
})();

function buildImageUrl(imageryProvider, info, x, y, level) {
    var quadKey = tileXYToQuadKey(x, y, level);
    var version = info.imageryVersion;
    version = (defined(version) && version > 0) ? version : 1;
    var imageUrl = imageryProvider.url + 'flatfile?f1-0' + quadKey + '-i.' + version.toString();

    var proxy = imageryProvider._proxy;
    if (defined(proxy)) {
        imageUrl = proxy.getURL(imageUrl);
    }

    return imageUrl;
}

function tileXYToQuadKey(x, y, level) {
    var quadkey = '';
    for (var i = level; i >= 0; --i) {
        var bitmask = 1 << i;
        var digit = 0;

        // Tile Layout
        // ___ ___
        //|   |   |
        //| 3 | 2 |
        //|-------|
        //| 0 | 1 |
        //|___|___|
        //

        if (!isBitSet(y, bitmask)) { // Top Row
            digit |= 2;
            if (!isBitSet(x, bitmask)) { // Right to left
                digit |= 1;
            }
        } else if (isBitSet(x, bitmask)) { // Left to right
            digit |= 1;
        }

        quadkey += digit;
    }
    return quadkey;
}

function quadKeyToTileXY(quadkey) {
    var x = 0;
    var y = 0;
    var level = quadkey.length - 1;
    for (var i = level; i >= 0; --i) {
        var bitmask = 1 << i;
        var digit = +quadkey[level - i];

        if (isBitSet(digit, 2)) {  // Top Row
            if (!isBitSet(digit, 1)) { // // Right to left
                x |= bitmask;
            }
        } else {
            y |= bitmask;
            if (isBitSet(digit, 1)) { // Left to right
                x |= bitmask;
            }
        }
    }
    return {
        x: x,
        y: y,
        level: level
    };
};

function isBitSet(bits, mask) {
    return ((bits & mask) !== 0);
}

function defined(value) {
    return value !== undefined && value !== null;
}

function loadArrayBuffer(url, headers, request) {
    return loadWithXhr({
        url: url,
        responseType: 'arraybuffer',
        headers: headers,
        request: request
    });
}

function getImageType(image) {
    var jpeg = 'JFIF';
    if (image[6] === jpeg.charCodeAt(0) && image[7] === jpeg.charCodeAt(1) &&
        image[8] === jpeg.charCodeAt(2) && image[9] === jpeg.charCodeAt(3)) {
        return 'image/jpeg';
    }

    var png = 'PNG';
    if (image[1] === png.charCodeAt(0) && image[2] === png.charCodeAt(1) && image[3] === png.charCodeAt(2)) {
        return 'image/png';
    }

    return undefined;
}

// Decodes an Imagery protobuf into the message
// Partially generated with the help of protobuf.js static generator
function decodeEarthImageryPacket(data) {
    var reader = protobuf.Reader.create(data);
    var end = reader.len;
    var message = {};
    while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
            case 1:
                message.imageType = reader.uint32();
                break;
            case 2:
                message.imageData = reader.bytes();
                break;
            case 3:
                message.alphaType = reader.uint32();
                break;
            case 4:
                message.imageAlpha = reader.bytes();
                break;
            case 5:
                var copyrightIds = message.copyrightIds;
                if (!defined(copyrightIds)) {
                    copyrightIds = message.copyrightIds = [];
                }
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2) {
                        copyrightIds.push(reader.uint32());
                    }
                } else {
                    copyrightIds.push(reader.uint32());
                }
                break;
            default:
                reader.skipType(tag & 7);
                break;
        }
    }

    var imageType = message.imageType;
    if (defined(imageType)) {
        switch (imageType) {
            case 0:
                message.imageType = 'image/jpeg';
                break;
            case 4:
                message.imageType = 'image/png';
                break;
            default:
                throw new RuntimeError('GoogleEarthEnterpriseImageryProvider: Unsupported image type.');
        }
    }

    var alphaType = message.alphaType;
    if (defined(alphaType) && alphaType !== 0) {
        console.log('GoogleEarthEnterpriseImageryProvider: External alpha not supported.');
        delete message.alphaType;
        delete message.imageAlpha;
    }

    return message;
}