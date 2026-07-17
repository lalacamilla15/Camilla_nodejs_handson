import { Map } from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";
import areaData from "./data/area.geojson?url"
import spongebobImg from "./data/spongebob.jpg";

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

// const data = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "name": "Jakarta"
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           106.8264957,
//           -6.1752311
//         ]
//       }
//     }
//   ]
// }


map.on("load", () => {

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

  // Layer Vector - Raster
  map.addSource ("spongebob", {
    type: "image",
    url: spongebobImg,
    coordinates: [
      [129.42, 16.53],// top-left
      [134.33, 16.24],// top-right
      [133.54, 13.26],// bottom-right
      [129.67, 13.43]// bottom-left
    ]
  })

  map.addLayer({
    id: "spongebob-image",
    type: "raster",
    source: "spongebob",
  })
})