const express = require('express');
const app = express();
const hbs = require('hbs');


const port = 3002;
app.listen(port, () => {
    console.log('listening on port', port);
})