const express = require ("express");
const app = express();
const hbs = require('hbs');
const toppingsController = require('./controllers/toppings.js');
const orderController = require('./controllers/order.js');
const indexController = require('./controllers/index.js');

app.set("view engine", "hbs");
app.set('views', './views');
app.use(express.static(__dirname + "/public"));
app.use('/toppings', toppingsController);
app.use('/order', orderController);
app.use('/', indexController);

const PORT = 3002;
app.listen(PORT, () => {
    console.log('========================');
    console.log("listening on port", PORT);
    console.log('========================');
});