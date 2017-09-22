let age = 27

function increaseAgeBy(int) {
    return age += int
}

console.log(increaseAgeBy(2));
console.log(age);

//this will show us naysayers over 300yo using FILTER
let naysayers = [
    { name: 'Adam', age: 320 },
    { name: 'Jared', age: 222 },
    { name: 'Will', age: 187 },
    { name: 'Isaac', age: 320 },
    { name: 'Rodney', age: 423 },
    { name: 'Fiona', age: 320 },
    { name: 'Mike', age: 239 }
]

let ancient = naysayers.filter((naysayer) => {
    return naysayer.age > 300;
})

console.log(ancient);

// Map Practice
// Create a variable called discountProducts that takes all the objects in product and cuts the price by 50%.
var products = [
    { name: 'flower vase', price: 75 },
    { name: 'lamp', price: 85 },
    { name: 'jar of honey', price: 95 },
    { name: 'coil', price: 65 },
    { name: 'lumber', price: 55 }
]

const discountProducts = products.map((discount) => {
    discount.price /= 2;
    return discount
})

console.log(discountProducts)

// Reduce Practice
// Create a variable called totalPrice, and use .reduce to get the sum of all prices.
var products = [
    { name: 'flower vase', price: 75 },
    { name: 'lamp', price: 85 },
    { name: 'jar of honey', price: 95 },
    { name: 'coil', price: 65 },
    { name: 'lumber', price: 55 }
]
const totalPrice = products.reduce((accumulator, v) => {
    return accumulator + v.price;
}, 0);
console.log(totalPrice);



function makeCar() => {
    fuel: 100,
        drive: function() {
            this.fuel--;
            return 'Vroom!';
        },
    refuel: function() {
        this.fuel = 100;
    }
}