const express = require('express');
const app = express();
const hbs = require('hbs');
const recipesController = require('./controllers/recipes')

const port = 3000;

app.use('/recipes', recipesController);
app.set('view engine', 'hbs');

/*app.get('/new', (req, res) => {
    res.render('recipes/new');
});*/





app.listen(port, () => {
    console.log('===============================');
    console.log('you are listening on port,', port);
    console.log('===============================');
    
})

