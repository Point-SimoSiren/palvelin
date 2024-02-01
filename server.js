const express = require('express')
const app = express()
const cors = require('cors')
const vaatteet = require('./vaatteet.json')
const path = require('path')
const fs = require('fs').promises

app.use(cors())

 // Pinkoodin lukeminen txt tiedostosta pelvelimelta ja lähettäminen selaimelle   
 app.get('/api/login', async (req, res) => {
    try {
        // Tiedoston lukeminen
        const savedPin = await fs.readFile('./pin.txt', 'utf-8')
        
        // Luetun sisällön lähettäminen clientille
        res.send(savedPin)
    } 
    catch {
        res.status(500).send('Internal Server Error')
    }
})




// Tehdään polkumääritys frontend kansioon 
const fronttipolku = path.join(__dirname, './frontend')

// Sanotaan että em. polussa on tiedostosisältö 
//jota palvelin käyttää kun se saa http requestin palvelimen juureen
app.use(express.static(fronttipolku))

// Vaatedatan lähettäminen
app.get('/api/vaatteet', (req, res) => {
        res.status(200).json(vaatteet)
        }
    )

// Palvelin kuuntelee portissa 3000
app.listen('3000', () => 
console.log("Server is up on port 3000")
)

//-----------------------------------------------
    //Hello world
/* app.get('/api/hello', (req, res) => {
    console.log("Pyyntö tuli")
    res.send("Hello World! I am Express web server!")
    }
) */