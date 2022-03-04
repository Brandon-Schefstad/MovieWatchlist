const express = require('express')
const app = express()

const cors = require('cors')
const PORT = 8000
const MongoClient = require('mongodb').MongoClient

let db,
    dbConnectionStr = "mongodb+srv://AthenasHelm:DQjmKN5PMzpUJW3@moviewatchlist.lgpbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    dbName = "MovieWatchlist"

MongoClient.connect(dbConnectionStr, {useUnifiedTopology:true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('.'));
app.set('view engine','ejs')


// Read request for loading main page with HTML/EJS
app.get('/', (request, response) => {
    db.collection('MovieWatchlist').find().sort({importance: -1}).toArray()
    .then (data => {
        response.render('index.ejs', {info: data})
    })
    .catch(error => console.error(error))
})

//Post to create 
app.post('/addMovie', (request,response) => {
    db.collection('MovieWatchlist').insertOne(request.body)
    .then (result => {
        console.log('Movie Added')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})

//Delete
app.delete('/deleteMovie', (request,response) => {
    db.collection('MovieWatchlist').deleteOne({movieName: request.body.movieNameS})
    // movieNameS is used in main.js deleteMovie()
    .then (result => {
        console.log('Movie Deleted')
        response.json("Movie Deleted")
    })
    .catch(errpr => console.error(error))
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})