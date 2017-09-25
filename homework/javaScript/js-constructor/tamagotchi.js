console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
        this.name = name;
        this.creatureType = creatureType;
    }
    cry() {
        this.foodInTummy--;
        console.log(`${this.name} has ${this.foodInTummy} in it's tummy`)
        console.log('WAHH!!!')
    }
    puke() {
        this.foodInTummy--;
        console.log(`${this.foodInTummy} WAHH!!!`)
    }

}

//create new Tamagotchis

const tamaOne = new Tamagotchi('bill');
const tamaTwo = new Tamagotchi('fred');
const tamaThree = new Tamagotchi('steve', 'cow');

tamaOne.cry();
tamaTwo.cry();
tamaThree.cry();

//test out your Tamagotchies below via console.logs
