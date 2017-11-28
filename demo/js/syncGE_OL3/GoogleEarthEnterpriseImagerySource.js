(function () {
    function stringToBuffer(str) {
        var len = str.length;
        var buffer = new ArrayBuffer(len);
        var ui8 = new Uint8Array(buffer);
        for (var i = 0; i < len; ++i) {
            ui8[i] = str.charCodeAt(i);
        }

        return buffer;
    }

    // Decodes packet with a key that has been around since the beginning of Google Earth Enterprise
    var defaultKey = stringToBuffer('\x45\xf4\xbd\x0b\x79\xe2\x6a\x45\x22\x05\x92\x2c\x17\xcd\x06\x71\xf8\x49\x10\x46\x67\x51\x00\x42\x25\xc6\xe8\x61\x2c\x66\x29\x08\xc6\x34\xdc\x6a\x62\x25\x79\x0a\x77\x1d\x6d\x69\xd6\xf0\x9c\x6b\x93\xa1\xbd\x4e\x75\xe0\x41\x04\x5b\xdf\x40\x56\x0c\xd9\xbb\x72\x9b\x81\x7c\x10\x33\x53\xee\x4f\x6c\xd4\x71\x05\xb0\x7b\xc0\x7f\x45\x03\x56\x5a\xad\x77\x55\x65\x0b\x33\x92\x2a\xac\x19\x6c\x35\x14\xc5\x1d\x30\x73\xf8\x33\x3e\x6d\x46\x38\x4a\xb4\xdd\xf0\x2e\xdd\x17\x75\x16\xda\x8c\x44\x74\x22\x06\xfa\x61\x22\x0c\x33\x22\x53\x6f\xaf\x39\x44\x0b\x8c\x0e\x39\xd9\x39\x13\x4c\xb9\xbf\x7f\xab\x5c\x8c\x50\x5f\x9f\x22\x75\x78\x1f\xe9\x07\x71\x91\x68\x3b\xc1\xc4\x9b\x7f\xf0\x3c\x56\x71\x48\x82\x05\x27\x55\x66\x59\x4e\x65\x1d\x98\x75\xa3\x61\x46\x7d\x61\x3f\x15\x41\x00\x9f\x14\x06\xd7\xb4\x34\x4d\xce\x13\x87\x46\xb0\x1a\xd5\x05\x1c\xb8\x8a\x27\x7b\x8b\xdc\x2b\xbb\x4d\x67\x30\xc8\xd1\xf6\x5c\x8f\x50\xfa\x5b\x2f\x46\x9b\x6e\x35\x18\x2f\x27\x43\x2e\xeb\x0a\x0c\x5e\x10\x05\x10\xa5\x73\x1b\x65\x34\xe5\x6c\x2e\x6a\x43\x27\x63\x14\x23\x55\xa9\x3f\x71\x7b\x67\x43\x7d\x3a\xaf\xcd\xe2\x54\x55\x9c\xfd\x4b\xc6\xe2\x9f\x2f\x28\xed\xcb\x5c\xc6\x2d\x66\x07\x88\xa7\x3b\x2f\x18\x2a\x22\x4e\x0e\xb0\x6b\x2e\xdd\x0d\x95\x7d\x7d\x47\xba\x43\xb2\x11\xb2\x2b\x3e\x4d\xaa\x3e\x7d\xe6\xce\x49\x89\xc6\xe6\x78\x0c\x61\x31\x05\x2d\x01\xa4\x4f\xa5\x7e\x71\x20\x88\xec\x0d\x31\xe8\x4e\x0b\x00\x6e\x50\x68\x7d\x17\x3d\x08\x0d\x17\x95\xa6\x6e\xa3\x68\x97\x24\x5b\x6b\xf3\x17\x23\xf3\xb6\x73\xb3\x0d\x0b\x40\xc0\x9f\xd8\x04\x51\x5d\xfa\x1a\x17\x22\x2e\x15\x6a\xdf\x49\x00\xb9\xa0\x77\x55\xc6\xef\x10\x6a\xbf\x7b\x47\x4c\x7f\x83\x17\x05\xee\xdc\xdc\x46\x85\xa9\xad\x53\x07\x2b\x53\x34\x06\x07\xff\x14\x94\x59\x19\x02\xe4\x38\xe8\x31\x83\x4e\xb9\x58\x46\x6b\xcb\x2d\x23\x86\x92\x70\x00\x35\x88\x22\xcf\x31\xb2\x26\x2f\xe7\xc3\x75\x2d\x36\x2c\x72\x74\xb0\x23\x47\xb7\xd3\xd1\x26\x16\x85\x37\x72\xe2\x00\x8c\x44\xcf\x10\xda\x33\x2d\x1a\xde\x60\x86\x69\x23\x69\x2a\x7c\xcd\x4b\x51\x0d\x95\x54\x39\x77\x2e\x29\xea\x1b\xa6\x50\xa2\x6a\x8f\x6f\x50\x99\x5c\x3e\x54\xfb\xef\x50\x5b\x0b\x07\x45\x17\x89\x6d\x28\x13\x77\x37\x1d\xdb\x8e\x1e\x4a\x05\x66\x4a\x6f\x99\x20\xe5\x70\xe2\xb9\x71\x7e\x0c\x6d\x49\x04\x2d\x7a\xfe\x72\xc7\xf2\x59\x30\x8f\xbb\x02\x5d\x73\xe5\xc9\x20\xea\x78\xec\x20\x90\xf0\x8a\x7f\x42\x17\x7c\x47\x19\x60\xb0\x16\xbd\x26\xb7\x71\xb6\xc7\x9f\x0e\xd1\x33\x82\x3d\xd3\xab\xee\x63\x99\xc8\x2b\x53\xa0\x44\x5c\x71\x01\xc6\xcc\x44\x1f\x32\x4f\x3c\xca\xc0\x29\x3d\x52\xd3\x61\x19\x58\xa9\x7d\x65\xb4\xdc\xcf\x0d\xf4\x3d\xf1\x08\xa9\x42\xda\x23\x09\xd8\xbf\x5e\x50\x49\xf8\x4d\xc0\xcb\x47\x4c\x1c\x4f\xf7\x7b\x2b\xd8\x16\x18\xc5\x31\x92\x3b\xb5\x6f\xdc\x6c\x0d\x92\x88\x16\xd1\x9e\xdb\x3f\xe2\xe9\xda\x5f\xd4\x84\xe2\x46\x61\x5a\xde\x1c\x55\xcf\xa4\x00\xbe\xfd\xce\x67\xf1\x4a\x69\x1c\x97\xe6\x20\x48\xd8\x5d\x7f\x7e\xae\x71\x20\x0e\x4e\xae\xc0\x56\xa9\x91\x01\x3c\x82\x1d\x0f\x72\xe7\x76\xec\x29\x49\xd6\x5d\x2d\x83\xe3\xdb\x36\x06\xa9\x3b\x66\x13\x97\x87\x6a\xd5\xb6\x3d\x50\x5e\x52\xb9\x4b\xc7\x73\x57\x78\xc9\xf4\x2e\x59\x07\x95\x93\x6f\xd0\x4b\x17\x57\x19\x3e\x27\x27\xc7\x60\xdb\x3b\xed\x9a\x0e\x53\x44\x16\x3e\x3f\x8d\x92\x6d\x77\xa2\x0a\xeb\x3f\x52\xa8\xc6\x55\x5e\x31\x49\x37\x85\xf4\xc5\x1f\x26\x2d\xa9\x1c\xbf\x8b\x27\x54\xda\xc3\x6a\x20\xe5\x2a\x78\x04\xb0\xd6\x90\x70\x72\xaa\x8b\x68\xbd\x88\xf7\x02\x5f\x48\xb1\x7e\xc0\x58\x4c\x3f\x66\x1a\xf9\x3e\xe1\x65\xc0\x70\xa7\xcf\x38\x69\xaf\xf0\x56\x6c\x64\x49\x9c\x27\xad\x78\x74\x4f\xc2\x87\xde\x56\x39\x00\xda\x77\x0b\xcb\x2d\x1b\x89\xfb\x35\x4f\x02\xf5\x08\x51\x13\x60\xc1\x0a\x5a\x47\x4d\x26\x1c\x33\x30\x78\xda\xc0\x9c\x46\x47\xe2\x5b\x79\x60\x49\x6e\x37\x67\x53\x0a\x3e\xe9\xec\x46\x39\xb2\xf1\x34\x0d\xc6\x84\x53\x75\x6e\xe1\x0c\x59\xd9\x1e\xde\x29\x85\x10\x7b\x49\x49\xa5\x77\x79\xbe\x49\x56\x2e\x36\xe7\x0b\x3a\xbb\x4f\x03\x62\x7b\xd2\x4d\x31\x95\x2f\xbd\x38\x7b\xa8\x4f\x21\xe1\xec\x46\x70\x76\x95\x7d\x29\x22\x78\x88\x0a\x90\xdd\x9d\x5c\xda\xde\x19\x51\xcf\xf0\xfc\x59\x52\x65\x7c\x33\x13\xdf\xf3\x48\xda\xbb\x2a\x75\xdb\x60\xb2\x02\x15\xd4\xfc\x19\xed\x1b\xec\x7f\x35\xa8\xff\x28\x31\x07\x2d\x12\xc8\xdc\x88\x46\x7c\x8a\x5b\x22');

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
    /**
     * extends ol.source.TileImage
     * 实现通过Cesium获取Google Earth的瓦片信息,通过ol.source使用
     * @param opt_options
     */
    ol.source.googleEarthImagery = function (opt_options) {
        var options = opt_options || {};
        if(!options.url && options.url === ''){
            throw "url is required!";
            return ;
        }
        if(!Cesium){
            throw "Cesium.js is required!";
            return ;
        }
        //TODO 重写Cesium.GoogleEarthEnterpriseMetadata,将解析MetaData单独提取出来并改为同步请求
/*        this.GEMetaData = {
            imageryPresent: true,
            protoImagery: undefined,
            terrainPresent: true,
            negativeAltitudeExponentBias: 32,
            negativeAltitudeThreshold: 0.000000000001,
            providers: {},
            key: undefined,
            _quadPacketVersion: 1,
            _tileInfo: {},
            _subtreePromises: {}
        };*/
        this.url = options.url;
        var projection = options.projection !== undefined ? options.projection : 'EPSG:4326';
        var that = this;
        this._providerReady = false;
        this.googleEarthProvider_ = new Cesium.GoogleEarthEnterpriseImageryProvider({
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
        var extent = ol.tilegrid.extentFromProjection(projection);
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
            projection: projection,
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
            options.cesium._ready = true;
            var metadata = options.cesium._metadata;
            if(JSON.stringify(metadata._tileInfo) == "{}"){
                this.requestDbRoot(metadata);
                this.getQuadTreePacket(metadata, '', metadata._quadPacketVersion, undefined);
            }
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
                    this.populateSubtree(metadata, quadKey, metadataRequest);
                   /* var promise_populate = metadata.populateSubtree(x, y, level, metadataRequest);
                    promise_populate.then(function (value) {
                        info = metadata.getTileInformation(x, y, level);
                        if (!defined(info))
                            return undefined; // No metadata so return undefined so we can be loaded later
                    });*/

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
        };

        this.populateSubtree = function (thatMeta, quadKey, request) {
            var that = thatMeta;
            var tileInfo = that._tileInfo;
            var q = quadKey;
            var t = tileInfo[q];
            // If we have tileInfo make sure sure it is not a node with a subtree that's not loaded
            if (defined(t) && (!t.hasSubtree() || t.hasChildren())) {
                return t;
            }

            while ((t === undefined) && q.length > 1) {
                q = q.substring(0, q.length - 1);
                t = tileInfo[q];
            }

            var subtreeRequest;

            // t is either
            //   null so one of its parents was a leaf node, so this tile doesn't exist
            //   exists but doesn't have a subtree to request
            //   undefined so no parent exists - this shouldn't ever happen once the provider is ready
            if (!defined(t) || !t.hasSubtree()) {
                //return when.reject(new RuntimeError('Couldn\'t load metadata for tile ' + quadKey));
                throw 'Couldn\'t load metadata for tile ' + quadKey;
                return;
            }

            // We need to split up the promise here because when will execute syncronously if getQuadTreePacket
            //  is already resolved (like in the tests), so subtreePromises will never get cleared out.
            //  Only the initial request will also remove the promise from subtreePromises.
            var quadTree = this.getQuadTreePacket(thatMeta, q, t.cnodeVersion, request);
            if(quadTree){
                subtreeRequest = new Request({
                    throttle : request.throttle,
                    throttleByServer : request.throttleByServer,
                    type : request.type,
                    priorityFunction : request.priorityFunction
                });
                return this.populateSubtree(that, quadKey, subtreeRequest);
            }

        };

        this.getQuadTreePacket = function (thatMeta, quadKey, version, request) {
            var that = thatMeta;
            version = defaultValue(version, 1);
            quadKey = defaultValue(quadKey, '');
            var url = getMetadataUrl(that, quadKey, version);

            //TODO 同步获取URL的response result xhr同步会存在问题
            //var promise = loadArrayBuffer(url, undefined, request);
            var metadata_buff = syncLoadArrayBuffer(url, undefined);

            var tileInfo = that._tileInfo;
            var key = that.key;
            //TODO 异步结果解析改同步
            //Cesium为将异步获取的metadata buffer数据放入调度方法中，通过worker类进行后台线程计算，然后异步等待结果
            //decodeGoogleEarthEnterprisePacket解析GE buffer
            var parmeters = {
                buffer : metadata_buff,
                quadKey : quadKey,
                type : 'Metadata',
                key: key
            };
            var result = decodeGoogleEarthEnterprisePacket(parmeters, [metadata_buff]);
            var root;
            var topLevelKeyLength = -1;
            if (quadKey !== '') {
                // Root tile has no data except children bits, so put them into the tile info
                topLevelKeyLength = quadKey.length + 1;
                var top = result[quadKey];
                root = tileInfo[quadKey];
                root._bits |= top._bits;

                delete result[quadKey];
            }

            // Copy the resulting objects into tileInfo
            // Make sure we start with shorter quadkeys first, so we know the parents have
            //  already been processed. Otherwise we can lose ancestorHasTerrain along the way.
            var keys = Object.keys(result);
            keys.sort(function(a, b) {
                return a.length - b.length;
            });
            var keysLength = keys.length;
            for (var i = 0; i < keysLength; ++i) {
                var key = keys[i];
                var r = result[key];
                if (r !== null) {
                    var info = Cesium.GoogleEarthEnterpriseTileInformation.clone(result[key]);
                    var keyLength = key.length;
                    if (keyLength === topLevelKeyLength) {
                        info.setParent(root);
                    } else if(keyLength > 1){
                        var parent = tileInfo[key.substring(0, key.length - 1)];
                        info.setParent(parent);
                    }
                    tileInfo[key] = info;
                } else {
                    tileInfo[key] = null;
                }
            }
            return true;
        }

        this.requestDbRoot = function(metadata){
            var that = metadata;
            var url = Cesium.joinUrls(this.url, 'dbRoot.v5?output=proto');
            var buf = syncLoadArrayBuffer(url);
            var encryptedDbRootProto = dbrootParser.EncryptedDbRootProto.decode(new Uint8Array(buf));

            var byteArray = encryptedDbRootProto.encryptionData;
            var offset = byteArray.byteOffset;
            var end = offset + byteArray.byteLength;
            var key = that.key = byteArray.buffer.slice(offset, end);

            byteArray = encryptedDbRootProto.dbrootData;
            offset = byteArray.byteOffset;
            end = offset + byteArray.byteLength;
            var dbRootCompressed = byteArray.buffer.slice(offset, end);
            var parmeters = {
                buffer : dbRootCompressed,
                type : 'DbRoot',
                key: key
            };
            var result = decodeGoogleEarthEnterprisePacket(parmeters, [dbRootCompressed]);
            var dbRoot = dbrootParser.DbRootProto.decode(new Uint8Array(result.buffer));
            that.imageryPresent = defaultValue(dbRoot.imageryPresent, that.imageryPresent);
            that.protoImagery = dbRoot.protoImagery;
            that.terrainPresent = defaultValue(dbRoot.terrainPresent, that.terrainPresent);
            if (defined(dbRoot.endSnippet) && defined(dbRoot.endSnippet.model)) {
                var model = dbRoot.endSnippet.model;
                that.negativeAltitudeExponentBias = defaultValue(model.negativeAltitudeExponentBias, that.negativeAltitudeExponentBias);
                that.negativeAltitudeThreshold = defaultValue(model.compressedNegativeAltitudeThreshold, that.negativeAltitudeThreshold);
            }
            if (defined(dbRoot.databaseVersion)) {
                that._quadPacketVersion = defaultValue(dbRoot.databaseVersion.quadtreeVersion, that._quadPacketVersion);
            }
            var providers = that.providers;
            var providerInfo = defaultValue(dbRoot.providerInfo, []);
            var count = providerInfo.length;
            for(var i=0;i<count;++i) {
                var provider = providerInfo[i];
                var copyrightString = provider.copyrightString;
                if (defined(copyrightString)) {
                    providers[provider.providerId] = new Cesium.Credit(copyrightString.value);
                }
            }
        }

    };
    ol.inherits(ol.source.googleEarthImagery, ol.source.TileImage);
})();

function defaultValue(a, b) {
    if (a !== undefined && a !== null) {
        return a;
    }
    return b;
}

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

function getMetadataUrl(thatMeta, quadKey, version) {
    var that = thatMeta;
    return Cesium.joinUrls(that._url, 'flatfile?q2-0' + quadKey + '-q.' + version.toString());
}

/**
 * 同步XHR
 * 获取Google Earth response binary
 * @param url
 * @param headers
 */
function syncLoadArrayBuffer(url, headers) {
    var options = {
        url : url,
        responseType : 'arraybuffer',
        headers : headers,
    }

    var url = options.url;

    var responseType = options.responseType;
    var method = defaultValue(options.method, 'GET');
    var data = options.data;
    var headers = options.headers;
    var overrideMimeType = options.overrideMimeType;
    url = defaultValue(url, options.url);
    var result_buffer = loadArrayBufferMeta(url, responseType, method, data, headers, overrideMimeType);
    return result_buffer;

}

function loadArrayBufferMeta(url, responseType, method, data, headers, overrideMimeType) {
    var result = null;
    var dataUriRegex = /^data:(.*?)(;base64)?,(.*)$/;
    var dataUriRegexResult = dataUriRegex.exec(url);
    if (dataUriRegexResult !== null) {
        return decodeDataUri(dataUriRegexResult, responseType);
    }

    var xhr = new XMLHttpRequest();

/*    if (TrustedServers.contains(url)) {
        xhr.withCredentials = true;
    }*/
    overrideMimeType = 'text/plain; charset=x-user-defined';
    if (defined(overrideMimeType) && defined(xhr.overrideMimeType)) {
        xhr.overrideMimeType(overrideMimeType);
    }
    xhr.overrideMimeType('text/plain; charset=x-user-defined');
    //false为同步---存在问题
    xhr.open(method, url, false);

    if (defined(headers)) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    }

    if (defined(responseType)) {
        //xhr.responseType = responseType;
        //同步不能动
    }

    // While non-standard, file protocol always returns a status of 0 on success
    var localFile = false;
    if (typeof url === 'string') {
        localFile = url.indexOf('file://') === 0;
    }

    xhr.onload = function() {
        if ((xhr.status < 200 || xhr.status >= 300) && !(localFile && xhr.status === 0)) {
            //deferred.reject(new RequestErrorEvent(xhr.status, xhr.response, xhr.getAllResponseHeaders()));
            throw {
                status: xhr.status,
                response: xhr.response,
                headers: xhr.getAllResponseHeaders()
            };
            return;
        }

        var response = xhr.response;
        //var browserResponseType = xhr.responseType;
        var browserResponseType = responseType;

        //All modern browsers will go into either the first if block or last else block.
        //Other code paths support older browsers that either do not support the supplied responseType
        //or do not support the xhr.response property.
        if (defined(response) && (!defined(responseType) || (browserResponseType === responseType))) {
            //deferred.resolve(response);
            //result =  response;
            var l = response.length;
            var arr = new Uint8Array(l);
            for(var i = 0; i < l; i++) {
                arr[i] = response.charCodeAt(i);
            }
            result = arr.buffer;
        } else if ((responseType === 'json') && typeof response === 'string') {
            try {
                //deferred.resolve(JSON.parse(response));
                result =  JSON.parse(response);
            } catch (e) {
                //deferred.reject(e);
                throw e;
            }
        } else if ((browserResponseType === '' || browserResponseType === 'document') && defined(xhr.responseXML) && xhr.responseXML.hasChildNodes()) {
            //deferred.resolve(xhr.responseXML);
            result =  xhr.responseXML;
        } else if ((browserResponseType === '' || browserResponseType === 'text') && defined(xhr.responseText)) {
            //deferred.resolve(xhr.responseText);
            result = xhr.responseText;
        } else {
            //deferred.reject(new RuntimeError('Invalid XMLHttpRequest response type.'));
            throw 'Invalid XMLHttpRequest response type.';
        }
    };

    xhr.onerror = function(e) {
        //deferred.reject(new RequestErrorEvent());
        console.log("request error:" + e);
    };

    xhr.send(data);
    return result;
}

function decodeDataUriText(isBase64, data) {
    var result = decodeURIComponent(data);
    if (isBase64) {
        return atob(result);
    }
    return result;
}

function decodeDataUriArrayBuffer(isBase64, data) {
    var byteString = decodeDataUriText(isBase64, data);
    var buffer = new ArrayBuffer(byteString.length);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
        view[i] = byteString.charCodeAt(i);
    }
    return buffer;
}

function decodeDataUri(dataUriRegexResult, responseType) {
    responseType = defaultValue(responseType, '');
    var mimeType = dataUriRegexResult[1];
    var isBase64 = !!dataUriRegexResult[2];
    var data = dataUriRegexResult[3];

    switch (responseType) {
        case '':
        case 'text':
            return decodeDataUriText(isBase64, data);
        case 'arraybuffer':
            return decodeDataUriArrayBuffer(isBase64, data);
        case 'blob':
            var buffer = decodeDataUriArrayBuffer(isBase64, data);
            return new Blob([buffer], {
                type : mimeType
            });
        case 'document':
            var parser = new DOMParser();
            return parser.parseFromString(decodeDataUriText(isBase64, data), mimeType);
        case 'json':
            return JSON.parse(decodeDataUriText(isBase64, data));
        default:
            //>>includeStart('debug', pragmas.debug);
            throw 'Unhandled responseType: ' + responseType;
        //>>includeEnd('debug');
    }
}
