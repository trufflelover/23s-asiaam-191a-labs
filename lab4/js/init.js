// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
// function addMarker(lat,lng,title,message){
//     // console.log(message)
//     L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
//     createButtons(lat,lng,location)
//     return message
// }


function addMarker(data){
    const title = data["What is the name of the place?"];
    const lat = parseFloat(data["lat"]);
    const lng = parseFloat(data["lng"]);
    const bestMenu = data["What is the best menu?"];
    const shoutout = data["(optional) What is your name? Could be nick name or any name you want to be called. You will get a shoutout on the map  ex) \"Approved by Stephanie\""];
    const message = bestMenu + (shoutout ? "<br>Recommended by " + shoutout : "");
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <p>${message}</p>`)
    createButtons(lat, lng, title);
    return message;
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // create a new button
    newButton.id = "button"+title; // give the button an id
    newButton.innerHTML = title; // give the button text
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], mapOptions.zoom); //this will move the view to the button location
    })
    document.getElementById('placeForButtons').appendChild(newButton); //append the button to placeForButtons div

}
const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbmdY93DI_U_PHnAT3JqcbiVNDfPys1yb1RcfGmpEj_hs2nOA1-4UNWi0pWxHU6-T8C0sshnkrC7Ma/pub?output=csv"

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
}

loadData(dataUrl)
