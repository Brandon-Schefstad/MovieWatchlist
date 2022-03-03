const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('.'));

// Get request for loading main page with HTML/EJS
app.get('', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/squirtle', (request, response) => {
    response.json(squirtle)
})

app.listen(process.env.POR || PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})