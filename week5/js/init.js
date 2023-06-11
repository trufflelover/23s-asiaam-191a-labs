// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':9}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);
let laicon = L.divIcon({
    html: 
    ` 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    `,
    className: "LAmarker",
    iconSize: [32, 32],
    iconAnchor: [0, 0],
  });
let ocicon = L.divIcon({
    html: 
    ` 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    `,
    className: "OCmarker",
    iconSize: [32, 32],
    iconAnchor: [0, 0],
});
let regionicon = {
    "LA": laicon, 
    "OC": ocicon
};

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
})
.addTo(map);


// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    //L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,message);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.className = title
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('mouseover', function(){
        map.flyTo([lat,lng],11); //this is the flyTo from Leaflet
    })
    document.getElementById("contents").appendChild(newButton); //this adds the button to our page.
}


// use our marker functions
addMarker(34.06301544400351, -118.2976662711643,'region','LA')
addMarker(33.773621321773035,-117.98258098167369,'travel 2','OC')
createButtons(34.0709,-118.444,"home🏠")
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
        let marker = L.marker(latlng,);
        marker.setIcon(regionicon[feature.properties.region])
                // if (feature.properties.region == "OC"){
                //     marker.setIcon(food["off"]);
                // } else {
                //     marker.setIcon(drink["off"]);
                // }
          return marker
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

    


