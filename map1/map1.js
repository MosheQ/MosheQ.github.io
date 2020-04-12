26 lines (21 sloc) 1012 Bytes 
Raw
Blame
History


var mymap = L.map('mapdiv').setView([-4.8, 11.85], 10)

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mymap)

var mark1 = L.marker([30.033333, 31.233333]).addTo(mymap)

var mark2 = L.marker([31.2, 29.916667]).addTo(mymap)

var mark3 = L.marker([-4.267778, 15.291944]).addTo(mymap)

var mark4 = L.marker([42.3, -71.8]).addTo(mymap)

var mark5 = L.marker([30.4475, -91.178611]).addTo(mymap)

var mark6 = L.marker([39, -111]).addTo(mymap)



var polygon1 = L.polygon([[31, -88],

                          [35, -88],

                          [32, -82]]).addTo(mymap); 

var polyline1 = L.polyline([[-4.267778, 15.291944],[30.4475, -91.178611]]).addTo(mymap);

mymap.fitBounds(polyline1.getBounds());



mark1.bindPopup('Cairo,Egypt')

mark2.bindPopup('Alexandria, Egype')

mark3.bindPopup('Brazzaville, Congo')

mark4.bindPopup('New-York, Massachusetts')

mark5.bindPopup('Baton Rouge, Louisiana)')

mark6.bindPopup('Salt Lake City, Utah')





polygon1.bindPopup('A polygon')

polyline1.bindPopup('Distanced Travelled')
