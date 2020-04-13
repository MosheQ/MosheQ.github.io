var MO4046 = L.map('mymap').setView([32.18, -99.14], 4)
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(MO4046)
var point1 = L.marker([30.3947416, -91.1735687]).addTo(MO4046)
var polygon1 = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(MO4046)

polygon1.bindPopup('Your polygon popup text here.')
point1.bindPopup('Your marker popup text here.')
