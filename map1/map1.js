var MO4046 = L.map('mymap').setView([32.18, -99.14], 15)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(MO4046)
var point1 = L.marker([30.3947416, -91.1735687]).addTo(MO4046)
var polygon1 = L.polygon([
  [30.399766, -91.174437],
  [30.396898, -91.177514],
  [30.395058, -91.173975],
  [30.398310, -91.170756]
]).addTo(MO4046)

var polyline1 = L.polyline([[30.397059, -91.174414], [30.416975, -91.171357]]).addTo(MO4046);
MO4046.fitBounds(polyline1.getBounds());

polygon1.bindPopup('Polygon.')
point1.bindPopup('ICC')
