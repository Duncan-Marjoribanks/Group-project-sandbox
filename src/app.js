const MapView = require('./views/map_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

const hook = document.querySelector('#captain');
const mapView = new MapView(hook);
mapView.initialize();

});
