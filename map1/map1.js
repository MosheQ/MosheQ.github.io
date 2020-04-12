var MO4046 = L.map('Moshe').setView([32.18, -99.14], 4)
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png').addTo(MO4046)
var BlockG = L.marker([30.3947416, -91.1735687]).addTo(MO4046)
var ArmstrongApartment = L.polygon([
  [30.399766, -91.174437],
  [30.396898, -91.177514],
  [30.395058, -91.173975],
  [30.398310, -91.170756]
]).addTo(MO4046)
// create a red polyline from an array of LatLng points
var polyline1 = L.polyline([[30.397059, -91.174414], [30.416975, -91.171357]]).addTo(MO4046);
MO4046.fitBounds(polyline1.getBounds());

BlockG.bindPopup('The Armstrong')
ArmstrongApartment.bindPopup('MO_s Apartment')
polyline1.bindPopup('Flight of the crow')

