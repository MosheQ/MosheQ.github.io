
// initialize the map
var mymap3 = L.map('mapdiv8').setView([36.47431, -96.65782], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap3)
var gjsonUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'

//////////////////////////////////////////////////////////////////////////////
jQuery.getJSON(gjsonUrl, function(data) {

var styleFunction = function(feature) {
  var medAge = feature.properties.MED_AGE // get the current state's Median Age attribute
  var colorString = 'purple' // let the initial color be a darker green

      if (medAge < 25) {
    colorString = 'red'
  } // if the state's median age is less than the average, color it a lighter green

  if (medAge < 38) {
    colorString = 'green'
  } // if the state's median age is less than the average, color it a lighter green
  return {
    color: colorString, // use the color variable above for the value
    weight: 1,
    fillOpacity: 0.3
  }
}

var geojsonObject = {
  style: styleFunction,
onEachFeature: onEachFeatureFunction
}
L.geoJSON(data, geojsonObject).addTo(mymap3)
})

var onEachFeatureFunction = function(feature, layer) {
// contents of the function
var name = feature.properties.STATE_NAME
var age = feature.properties.MED_AGE
layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
// statesLayerObject.addLayer(layer)
}
