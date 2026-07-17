import { Map } from 'maplibre-gl';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px"
document.body.appendChild(mapElement);

const map = new Map ({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.82, -6.17],
  zoom: 2
});

const data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Jakarta"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.8264957,
          -6.1752311
        ]
      }
    }
  ]
}


map.on("load", () => {
  map.addSource ('kota', {
    type: 'geojson',
    data: data
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
})
