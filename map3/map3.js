var MO4046 = L.map('mymap').setView([39.163989, -102.023264], 5)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(MO4046)


var stdemographics = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'

jQuery.getJSON(stdemographics, function (us_state_demographics_ESRI_2010A) {
  L.geoJSON(us_state_demographics_ESRI_2010A).addTo(MO4046)
})



//              |Happy|  
//                       |Beautiful|
L.geoJSON(data, { style: { color: 'green' }}).addTo(MO4046)


var fourseasons =  function (feature) {
  var subject = feature.properties.MED_AGE // get the current state's Median Age attribute
  var newcolor = 'olive' // let the initial color be a darker green
  if (subject < 38) { newcolor = 'green' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: newcolor, // use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}

var spring = { style: fourseasons }
L.geoJSON(data, spring).addTo(MO4046)




var age_by_state = function (feature, layer) {
   var name = feature.properties.STATE_NAME
   var age = feature.properties.MED_AGE
   layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
 }

#if ( stateName == 'Louisiana' ) { // code here }


