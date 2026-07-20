import naturalEarthData from "../data/ne.geojson?url";
import areaData from "../data/area.geojson?url";

export function addKotaLayer (map){
// Layer Vector - Titik
  map.addSource ('kota', {
    type: 'geojson',
    data: naturalEarthData 
  });

  map.addLayer({
    id: "titik-kota",
    type: "circle",
    source: "kota",
    paint: {
      "circle-radius": 5,
      "circle-color": "navy",
      "circle-stroke-width": 1.5,
      "circle-stroke-color": "white",
      "circle-opacity": 0.7
    }
  })
}

export function addPulauLayer (map){
    // Layer Vector - Polygon
      map.addSource('pulau', {
        type: "geojson",
        data: areaData
      })
    
      map.addLayer ({
        id: "area-pulau",
        type: "fill",
        source: "pulau",
        paint: {
          "fill-color": "orange",
          "fill-outline-color": "olive"
        }
      })
}