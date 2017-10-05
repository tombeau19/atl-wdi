//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const hbs = require("hbs");
const logger = require('morgan');


//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));

/*app.get('/', (req, res) => {
    res.redirect('/donuts')
})*/

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
const seedController = require('./controllers/seeds.js');
app.use('/seed', seedController);

//for root directory, show all donuts
const donutsController = require('./controllers/donuts.js');
app.use('/', donutsController);

//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"
mongoose.connect('mongodb://localhost/donut_store')
const db = mongoose.connection;


//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
db.on('error', (error) => {
    console.log(error)
})
db.once('open', () => {
    console.log('database has been connected')
})

const port = 3000
app.listen(port, () => {
    console.log(`express started on ${port}`)
})