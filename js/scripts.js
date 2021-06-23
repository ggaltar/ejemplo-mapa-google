let mapa;

function initMap() {
  mapa = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: 10.0, lng: -84.0 },
    zoom: 8,
    mapTypeId: 'hybrid' // roadmap, satellite, hybrid, terrain
  });
}
