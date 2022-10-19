const map = L.map("mapid").setView([-27.5968047, -48.436816], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon2 = L.icon({
  iconUrl: "/images/mapImproper.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const icon = L.icon({
  iconUrl: "/images/mapProper.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {

  

  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" > </a>`);

// create and add marker
  if(open_on_weekends.value == 1){
  L
  .marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup);
  } else {
    L
  .marker([lat, lng], { icon2 })
  .addTo(map)
  .bindPopup(popup);
  }
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }

    addMarker(orphanage)
})