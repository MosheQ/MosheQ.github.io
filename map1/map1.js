var MO4046 = L.map('mymap').setView([32.18, -99.14], 15)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(MO4046)
var point1 = L.marker([30.395911, -91.178485]).addTo(MO4046)
var polygon1 = L.polygon([
  [30.395207, -91.182749],
  [30.391854, -91.183239],
  [30.391484, -91.179720],
  [30.393650, -91.179355],
  [30.393464, -91.176372],
  [30.396500, -91.178540]
]).addTo(MO4046)

var polyline1 = L.polyline([[30.397059, -91.174414], [30.416975, -91.171357]]).addTo(MO4046);
MO4046.fitBounds(polyline1.getBounds());

polygon1.bindPopup('Tigerland')
point1.bindPopup('ICC')
