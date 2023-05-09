// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);


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
//addMarker(37.566536,126.977966,'travel 1','seoul!')
//addMarker(49.282730,-123.120735,'travel 2','vancouver!')
//addMarker(42.360081,-71.058884,'travel 3','boston')
//addMarker(27.664827,-81.515755,'travel 4','florida')

// load the GeoJSON data
fetch('map.geojson')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // create a Leaflet GeoJSON layer from the GeoJSON data
   // let geojsonLayer = L.geoJSON(data);

    // add the GeoJSON layer to the map
    //geojsonLayer.addTo(map);
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => { 
          return L.circleMarker(latlng, {color: feature.properties.color})
      }
       }).bindPopup(layer => {
      //return layer.feature.properties.place;
      let name = layer["feature"]["properties"]["K-Food"]
      let bestmenu = layer["feature"]["properties"]["Best Menu"]
      let link = `https://www.yelp.com/search?find_desc=${name}&find_loc=California`
      let popupcontent = `<h3> Restaurant Name </h3> ${name} 
      <br> <h3> Best Menu </h3> ${bestmenu}`
      let tablepopup = `<table style="width:100%">
      <tr>
        <th>Restaurant Name</th>
        <th>Best Menu</th>
        <th>Link</th>
      </tr>
      <tr>
        <td>${name}</td>
        <td>${bestmenu}</td>
        <td> <a href="${link}"> yelp link </a>
      </tr>
    
    </table>`
      return tablepopup;
      }).addTo(map)
    });

    

