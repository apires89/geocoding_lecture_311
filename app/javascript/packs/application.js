import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

const indexpage = document.getElementByClassName("flatsindex")
if (indexpage) {
  initMapbox();
}

import { initMapbox } from "../components/mapbox"
import { initAutocomplete } from "../components/autocomplete"
initAutocomplete();


