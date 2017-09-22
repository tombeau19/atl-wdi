//LOG EACH WORD IN WORDS IN UPPER CASE USING forEach
words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach((word) => {
    const capWords = word.toUpperCase(word);
    console.log(capWords);
});

//LOG EACH NUMBER IN squareMe SQUARE VALUE IN THE ARRAY USING forEach
const squareMe = [0, 1, 10, 24, 595]

squareMe.forEach((num) => {
    const squareNum = Math.pow(num, 2);
    console.log(squareNum);
});

//LOG THE AVERAGE AS A NUMBER FOR THE NUMBERS IN THE NUMBERS ARRAY USING forEach
const numbers = [5, 7, 9, 12, 20]
let sum = 0

numbers.forEach((num) => {
    sum += num;
});

const avg = (sum / numbers.length);

console.log(avg);

//Log an array of each products' price using forEach. Upgrade this array so that the prices are in ascending order
var products = [
    { name: 'flower vase', price: 75 },
    { name: 'lamp', price: 85 },
    { name: 'jar of honey', price: 95 },
    { name: 'seashell frame', price: 65 },
    { name: 'lumber', price: 55 }
];

const priceArray = [];
products.forEach((obj) => {
    priceArray.push(obj.price);
});

priceArray.sort();



