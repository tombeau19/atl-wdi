const express = require ("express");
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send('Welcome to Pizza Express');
});

app.get('/topping/:type', (req, res) => {
    res.send(`${req.params.type} pizza! Good choice.`);
})

app.get('/order/:amount/:size', (req, res) => {
    res.send(`Your order for ${req.params.amount} ${req.params.size} pizza(s) will be ready in 1 minute!`)
})

const PORT = 3002;
app.listen(PORT, () => {
    console.log('========================');
    console.log("listening on port", PORT);
    console.log('========================');
});