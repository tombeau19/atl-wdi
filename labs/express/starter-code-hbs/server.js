/* packages */
const path        = require('path');
const express     = require('express');
const hbs         = require('hbs');
const bodyParser  = require('body-parser');
const methodOveride = require('method-override');
/* app settings*/
const app         = express();
const port        = process.env.PORT || 3000;
const todosController = require('./controllers/todos');
/* set up the application params*/

//DELETE - how to use method overide
app.use(methodOveride('_method'));

// body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

/*Views*/
app.set('view engine', 'hbs');

//* Controllers */
app.use('/todos', todosController);

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
