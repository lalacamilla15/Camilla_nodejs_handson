import { Map, FullscreenControl, GlobeControl, LogoControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { addKotaLayer, addPulauLayer } from './layers/vector';
import spongebobImg from "./data/spongebob.jpg";
import { addSpongebobImage } from './layers/raster';
import { addAttribution } from './controls/basicControls';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map ({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.82, -6.17],
  zoom: 2,
  attributionControl: false
});

map.on("load", () => {
  addKotaLayer(map);
  addPulauLayer(map);
  addSpongebobImage(map);

});

// Controls setting
addAttribution(map, "Natural Earth, Nickelodeon");

map.addControl(new FullscreenControl())
map.addControl(new GlobeControl)
map.addControl(new LogoControl ({compact:false}))