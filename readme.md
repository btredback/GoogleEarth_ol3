- 扩展Openlayers，增加GoogleEarth 影像source，使用Cesium获取GoogleEarth影像瓦片的信息

  openlayers,extend ol.source.TileImage to use googleearth's imagery tile on openlayers.through the use of Cesium.js

- Usage 

  like demo,import Cesium.js, google-earth-dbroot-parser.js , decodeGoogleEarthEnterprise.js, GoogleEarthEnterpriseImagerySource.js

  create ol source:

  url is the google earth request imagery tile request(need ge auth)

  ```javascript
  new ol.source.googleEarthImagery({
                  url: url,
                  projection: ol.proj.get('EPSG:4326')
              })
  ```

  use it in openlayers

- TODO

  - Detachment Cesium

    现在方法还是通过Cesium来获取GE的metadata，但是GE方法都是异步调用，而OL是同步的，所以有些方法重写成了同步方法。不如将解析Metadata内容完全脱离Cesium单独使用。