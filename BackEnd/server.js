const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// login details
const strConnection = 'mongodb+srv://admin:admin@cluster0.klo1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(strConnection);
}

// setting up the movie schema
const movieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Poster: String
});

// compiling our schema into a model
const movieModel = mongoose.model('movie', movieSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// how we want movies displayed
app.post('/api/movies', (req, res) => {
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    movieModel.create({
        Title: req.body.Title,
        Year: req.body.Year,
        Poster: req.body.Poster
    });
    res.send('Data Sent to Server!')
});

// displays just the movie connected to they id typed in
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    movieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})
// displays the movie data
app.get('/api/movies', (req, res) => {
    movieModel.find((err, data) => {
        res.json(data);
    })

})

// goes and gets the data to edit a movie
app.put('/api/movies/:id', (req,res)=>{
    console.log("Update Movie: "+req.params.id);
    console.log(req.body);

    movieModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
        (err,data)=>{
            res.send(data);
        })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// extras here
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

app.get('/whatever', (req, res) => {
    res.send('cool!')
})

app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);
})

app.post('/name', (req, res) => {
    res.send('Goodbye ' + req.body.firstname + ' ' + req.body.lastname);
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

    //https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg
    //https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg