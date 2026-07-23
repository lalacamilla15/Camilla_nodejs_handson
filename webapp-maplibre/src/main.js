import { 
  Map, 
  FullscreenControl, 
  GlobeControl, 
  LogoControl, 
} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { addKotaLayer, addPulauLayer } from './layers/vector';
import spongebobImg from "./data/spongebob.jpg";
import { addSpongebobImage } from './layers/raster';
import { addAttribution } from './controls/basicControls';
import { LogoGmapsControl } from './controls/customLogoControl'
import { addKotaPopup } from './popups/layerPopups';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map ({
  container: 'map',
  style: 'https://basemap.mapid.io/styles/basic/style.json?key=6a619203e6cb472cfcad9330',
  center: [106.82, -6.17],
  zoom: 10,
  attributionControl: true,
  cooperativeGestures: false,
});


map.on("load", () => {
  addKotaLayer(map);
  addPulauLayer(map);
  addSpongebobImage(map);

});

map.on("click", "titik-kota", function(event){
  addKotaPopup(map, event)
})

// map.doubleClickZoom.disable();

// Controls setting
addAttribution(map, "Natural Earth, Nickelodeon");

map.addControl(new FullscreenControl())
map.addControl(new GlobeControl)
map.addControl(new LogoControl ({compact:false}))
map.addControl(new LogoGmapsControl(), "top-left")