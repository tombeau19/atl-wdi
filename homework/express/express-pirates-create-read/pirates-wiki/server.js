const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const pirateController = require('./controllers/pirates.js');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/pirates', pirateController);



const port = 3000;

app.listen(port, () => {
    console.log('========================');
    console.log('listening on port ', port);
    console.log('========================');
});