import { Map } from 'maplibre-gl';
import { addKotaLayer, addPulauLayer } from '../../layers/vector';
import 'maplibre-gl/dist/maplibre-gl.css';
import { addAttribution } from '../../controls/basicControls';
import { LogoGmapsControl } from '../../controls/customLogoControl';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px"
document.body.appendChild(mapElement);

const map = new Map ({
  container: 'map',
  style: 'https://basemap.mapid.io/styles/basic/style.json?key=6a619203e6cb472cfcad9330',
  center: [106.82, -6.17],
  zoom: 8,
  attributionControl: false
});

map.on("load", () => {
  addKotaLayer(map);
  addPulauLayer(map);
});

addAttribution(map, "Natural Earth");
map.addControl(new LogoGmapsControl(), "top-left")