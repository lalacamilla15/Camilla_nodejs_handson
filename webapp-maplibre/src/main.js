import { Map } from 'maplibre-gl';
import { addKotaLayer, addPulauLayer } from './layers/vector';
import spongebobImg from "./data/spongebob.jpg";
import { addSpongebobImage } from './layers/raster';

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
  addKotaLayer(map);
  addPulauLayer(map);
  addSpongebobImage(map);

})