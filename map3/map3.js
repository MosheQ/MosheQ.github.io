var MO4046 = L.map('mymap').setView([39.163989, -102.023264], 5)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(MO4046)


L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(MO4046)

L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
  layers: 'warnings_c',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(MO4046)
