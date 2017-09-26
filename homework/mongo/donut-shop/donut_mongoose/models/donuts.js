//requirements: require mongoose
var mongoose = require("mongoose");
mongoose.Promise = global.Promise

//create your donut schema:
const Schema = mongoose.Schema

var DonutSchema = new Schema({
    //write your schema fields here
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
    });


//export your donut with module.exports()
const DonutModel = mongoose.model('Donuts', DonutSchema)

module.exports = {
    DonutModel: DonutModel
}