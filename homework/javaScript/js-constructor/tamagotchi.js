console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy--;
        console.log(this.foodInTummy)
        console.log('WAHH!!!')
    }
}

const tamaOne = new Tamagotchi;

tamaOne.cry();


//create new Tamagotchis


//test out your Tamagotchies below via console.logs
