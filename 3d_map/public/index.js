// Grant CesiumJS access to your ion assets
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZjViZjJiYy0wMWUwLTRiNDctYTZkMy1iMDc5YjFlN2U2ODEiLCJpZCI6MTMxNTU3LCJpYXQiOjE2ODAyNjM1NTN9.HgjlLsGHZw8poXt4mpgXt47MIvws3_BgeszkLbuerPY";

const viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: new Cesium.CesiumTerrainProvider({
        url: Cesium.IonResource.fromAssetId(1),
    }),
    shadows: true,
});
viewer.scene.globe.depthTestAgainstTerrain = true;

const tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(1607250),
    })
);

(async () => {
    try {
        await addPins();
        await tileset.readyPromise;
        await viewer.zoomTo(tileset);

        // Apply the default style if it exists
        const extras = tileset.asset.extras;
        if (
            Cesium.defined(extras) &&
            Cesium.defined(extras.ion) &&
            Cesium.defined(extras.ion.defaultStyle)
        ) {
            tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
        }
    } catch (error) {
        console.log(error);
    }
})();

async function addPins(){
    try{
        const res = await fetch('http://localhost:8081/pm', {method: "GET"});
        const values = await res.json();

        const pinBuilder = new Cesium.PinBuilder();

        if(values instanceof Array && values.length > 0){
            for(let i=0; i<values.length; i++){
                const {value, lon, lat} = values[i];

                let color;
                if(value < 3)
                    color = Cesium.Color.GREENYELLOW;
                else if(value >= 3 && value < 7)
                    color = Cesium.Color.SANDYBROWN; 
                else if(value >= 7)
                    color = Cesium.Color.RED;

                viewer.entities.add({
                    name: value,
                    position: Cesium.Cartesian3.fromDegrees(lon, lat),
                    billboard: {
                        image: pinBuilder.fromText(value, color, value*3).toDataURL(),
                        verticalOrigin: Cesium.VerticalOrigin.BASELINE,
                    },
                });
            }
        }
    } catch (e){
        console.error(e);
    }
}