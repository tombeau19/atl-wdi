const express = require('express');
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//ALLOWS US TO USE METHOD-OVERRIDE
app.use(methodOverride('_method'));

//ALLOWS UT TO USE BODY-PARSER - THIS ALLOWS US TO OUT PUT INFO ON A FORM OR POST
app.use(bodyParser.urlencoded({
    extended: true
}));

//ALLOWS US TO ACCESS OUR TODONTS.JS FILE VIA CONTROLLERS
const todontsController = require('./controllers/todonts');

//ALLOWS US TO USE OUR TODONT.JS FILE-- FIRST ARG IS PATH, SECOND IS WHERE TO GO TO USE
app.use('/todonts', todontsController);

//VIEW ENGINE WE ARE USING HBS
app.set('view engine', 'hbs');

//SETS THE INDEX VIEW (HOMEPAGE - COULD STYLE THIS)
app.get('/', (req, res) => {
    res.send('THIS IS OUR HOME PAGE');
});









const port = 3000;
app.listen(port, function() {
    console.log(`========================`)
    console.log(`listening on port ${port}`);
    console.log(`========================`)
});
