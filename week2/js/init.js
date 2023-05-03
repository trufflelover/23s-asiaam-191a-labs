// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':1}

// use the variables
const map = L.map('maps').setView(mapOptions.center, mapOptions.zoom);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

// use our marker functions
addMarker(37.566536,126.977966,'travel 1','seoul!')
addMarker(49.282730,-123.120735,'travel 2','vancouver!')
addMarker(42.360081,-71.058884,'travel 3','boston')
// addMarker(27.664827,-81.515755,'travel 4','florida')

fetch("map.geojson") // fetch the GeoJSON file, this is the name from step 2.
    .then(response => {
        return response.json();
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data).addTo(map)
    });

