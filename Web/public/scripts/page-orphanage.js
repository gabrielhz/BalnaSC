const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html 

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
const open_on_weekends = document.querySelector('span[data-open_on_weekends]').dataset.open_on_weekends

// create map
const map = L.map('mapid', options).setView([lat, lng], 15);


//create and tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [58, 68],
        iconAnchor: [29, 68],
    }
});

var greenIcon = new LeafIcon({ iconUrl: "/images/mapProper.svg" }),
    redIcon = new LeafIcon({ iconUrl: "/images/mapImproper.svg" })

//create and add markers
console.log(open_on_weekends)
if (open_on_weekends == 1) {
    L
        .marker([lat, lng], { icon: greenIcon })
        .addTo(map)
} else {
    L
        .marker([lat, lng], { icon: redIcon })
        .addTo(map)
}

/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src

    button.classList.add('active')
}