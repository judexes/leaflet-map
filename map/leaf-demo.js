

var map = L.map( 'map', {
  center: [20.0, 5.0],
  minZoom: 1,
  zoom: 1
}).setView([6.581592, 3.3510916], 14)

// setView([6.581592, 3.3510916], 14) 
// use the set view to set the map view on load 
// using the lat, long given here as center of the map [6.581592, 3.3510916] 
// and using the 14 as map zoom range; increase to zoom in and reduce to zoom out. 

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + '../images/pin-green-md.png',
  iconRetinaUrl: myURL + '../images/pin-green-md.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng] )
      .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
      .addTo( map );
}