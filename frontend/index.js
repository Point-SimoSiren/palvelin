
// Footerin päivämääränäyttö
// let pvm = Date
// let pvmString = "<p>"+pvm+"</p>"
// document.getElementById("footer").innerHTML = pvmString

var pvm1 = new Date()
var pvm2 = pvm1.toLocaleDateString('fi-FI') // Suomalainen pvm
let pvmString = "<p>Copyright - "+pvm2+"</p>"
document.getElementById("footer").innerHTML = pvmString
