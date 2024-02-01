
// Footerin päivämääränäyttö
// let pvm = Date
// let pvmString = "<p>"+pvm+"</p>"
// document.getElementById("footer").innerHTML = pvmString

// Tarkistetaan alussa onko käyttäjä kirjautunut
let savedUser = localStorage.getItem("loggedUser")
if (savedUser == "true") {
    document.getElementById("tuotenappi").disabled = false
    document.getElementById("pin").value = ""
    document.getElementById("pin").style.visibility = "hidden"
    document.getElementById("login").style.visibility = "hidden"
    document.getElementById("logout").style.visibility = "visible"
}



var pvm1 = new Date()
var pvm2 = pvm1.toLocaleDateString('fi-FI') // Suomalainen pvm
let pvmString = "<p>Copyright - "+pvm2+"</p>"
document.getElementById("footer").innerHTML = pvmString

// Login
async function login() {
    const pin = document.getElementById("pin").value
    const response = await fetch("http://localhost:3000/api/login")
    const correctPin = await response.json()
    
    if (pin == correctPin) {
        document.getElementById("tuotenappi").disabled = false
        document.getElementById("pin").value = ""
        document.getElementById("pin").style.visibility = "hidden"
        document.getElementById("login").style.visibility = "hidden"
        document.getElementById("logout").style.visibility = "visible"

        localStorage.setItem("loggedUser", "true")

    }
    else {
        document.getElementById("pin").value = ""
        alert("Väärä pinkoodi!")
    }
}

function logout() {
    localStorage.clear()
    window.location.reload()
}



// Vaatedatan hakeminen palvelimelta
async function getVaatteet() {
    document.getElementById("root").innerHTML = "<h4>Ladataan...</h4>"

    let table = `<table>
                    <tr>
                        <th>nimike</th>
                        <th>kategoria</th>
                        <th>hinta</th>
                    </tr>`

    const response = await fetch("http://localhost:3000/api/vaatteet")
    const vaatteet = await response.json() // muutetaan json => javascript muotoon

    // Vaatteet käydäänn silmukassa läpi ja jokaiselle lisätään taulukkorivi
    await vaatteet.map(v => 
        table += `<tr>
                    <td>${v.nimike}</td>
                    <td>${v.kategoria}</td>
                    <td>${v.hinta}</td>
                  </tr>`
                )
    table += `</table>`

    document.getElementById("root").innerHTML = table

    }


