const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 8000

app.use(cors())
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.use(express.static('.'));


let squirtle = {
    'Type':'Water',
    'Evolution':'Wartortle',
    'Weaknesses':'Grass, Electric',
}
app.get('', (request, response) => {
    // response.send('GET request to homepage')
    response.sendFile(__dirname + '/index.html')
    
})

app.get('/api/squirtle', (request, response) => {
    response.json(squirtle)
})

app.listen(process.env.POR || PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})