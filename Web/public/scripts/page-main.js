const map = L.map("mapid").setView([-27.5968047, -48.436816], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon


var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [58, 68],
    iconAnchor: [29, 68],
  }
});

var greenIcon = new LeafIcon({ iconUrl: "/images/mapProper.svg" }),
  redIcon = new LeafIcon({ iconUrl: "/images/mapImproper.svg" })


function addMarker({ id, name, open_on_weekends, lat, lng }) {


  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(`${name} <a href="/info-point?id=${id}"> <img src="/images/arrow-white.svg" > </a>`);

  // create and add marker


  if (open_on_weekends == 1) {
    L
      .marker([lat, lng], { icon: greenIcon })
      .addTo(map)
      .bindPopup(popup);
  } else {
    L
      .marker([lat, lng], { icon: redIcon })
      .addTo(map)
      .bindPopup(popup);
  }
}


const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {

  const orphanage = {
    id: span.dataset.id,
    open_on_weekends: span.dataset.open_on_weekends,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  }

  addMarker(orphanage)
})