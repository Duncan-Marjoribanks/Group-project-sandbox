const MapView = function (element) {
  this.element = element;
};


MapView.prototype.initialize = function () {
  const myMap = L.map('captain').setView([51.505, -0.09], 13);
  const mapElement = document.createElement('div');
  mapElement.textContent = myMap;
  this.element.appendChild(mapElement);

  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.pirates',
    accessToken: 'pk.eyJ1Ijoia3JlbWJsZXIiLCJhIjoiY2pqOXNwYTVkMDk2dTNybzE2MXZucTZhaCJ9.GADGaWfzaYT50fwFUUEFyQ'
  }).addTo(myMap);


  const marker = L.marker([51.5, -0.09]).addTo(myMap);
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


  const circle = L.circle([51.508, -0.11], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(myMap);
  circle.bindPopup("I am a circle.");


  const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(myMap);
  polygon.bindPopup("I am a polygon.");


  // this will give an alert pop up
  // function onMapClick(e) {
  //     alert("You clicked the map at " + e.latlng);
  // }
  // myMap.on('click', onMapClick);


  const popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent(`You clicked the map at ${e.latlng.toString()}`)
    .openOn(myMap);
  }
  myMap.on('click', onMapClick);



};


module.exports = MapView;
