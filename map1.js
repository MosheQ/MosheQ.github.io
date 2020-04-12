var MO_4046 = L.map('MO_4046').setView([32.18, -99.14], 4)
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png').addTo('MO_4046')
var renameThisMarkerObject = L.marker([30.3947416,-91.1735687]).addTo('MO_4046')
var renameThisPolygonObject = L.polygon([
  [30.399766, -91.174437],
  [30.396898, -91.177514],
  [30.395058, -91.173975],
  [30.398310, -91.170756]
]).addTo('MO_4046')
renameThisPolygonObject.bindPopup('The Armstrong')
renameThisMarkerObject.bindPopup('MO_s Apartment')
