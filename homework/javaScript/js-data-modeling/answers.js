//1. Ultra E-mail App
const user = {
    name: String,
    id: Number,
    email_addresses: [],
    password: String,
    username: String
}

const emailAccount = {
    id: Number,
    emailAdress: String,
    emailPassword: String,
    contactList: String
}

const exampleUser = {
    name: 'Tom',
    username: 'tombeau19',
    email: [{
        emailAddress: 'blah@gmail.com',
        emailPassword: '*****',
        contactList: 'asdf',
    }, {
        emailAddress: 'blah@yahoo.com',
        emailPassword: '*****',
        contactList: 'asdf',
    }],
}

//2. Radio on the Internet app
const station = {
    name: String,
    playlist: [{}],
    genre: String,
    popularity_score: Number
}

const playlist = {
    songs: String,
    artists: String,
}

const exampleStation = {
    name: 'good times',
    playlist: [{
        songs: 'woohoo',
        artists: 'rockers'
    }],
    genre: 'rock and roll',
    popularity_score: 0
}

//3. Rock Concert App
const user = {
    name: String,
    favoriteBands: [{}]
}

const bands = {
    name: String,
    tourDates: [{
        date: String,
        city: String,
        venue: String,
        time: String,
    }],
    ticketPrice: [{
        location: String,
        Price: Number
    }],
}

const exampleUser = {
    name: 'Tom',
    favoriteBands: [{
        name: 'blah',
        tourDates: [{
            date: '9/5/18',
            city: 'Boston',
            venue: 'Fenway',
            time: '11PM'
        }],
        ticketPrice: [{
            location: 'infield',
            Price: 1000000
        }],
    }]
}

//4. Coffee To-Go App
const coffeeShop = {
    name: String,
    location: String,
    contact: Number,
    menu: String
}

const menu = {
    desctiption: String,
    price: String,
    id: Number
}

const exampleCoffeeShop = {
    name: 'joes coffee',
    location: 'Atlanta',
    contact: 4043428593,
    menu: [{
        description: 'espresso',
        price: 79,
        id: 12323413
    }]
}

//4. Coffee To-Go App
const user = {
    name: String,
    username: String,
    email: String,
    password: String,
    favoriteTeams: [{}]
}

const favoriteTeam = {
    name: String,
    players: [],
    schedule: [],
    record: String
}

const exampleUser = {
    name: 'Tom',
    username: 'Tombeau19',
    email: 'thomas.beauregard@gmai.com',
    password: '*********',
    favoriteTeams: [{
        name: 'Red Sox',
        players: ['Dustion Pedroia', 'Mookie Betts', 'Jackie Bradley Jr.'],
        schedule: ['Yankees', 'Twins', 'Blue Jays'],
        record: '91-64'
    },
    {
        name: 'Patriots',
        players: ['Tom Brady', 'Mookie Betts', 'Jackie Bradley Jr.'],
        schedule: ['Yankees', 'Twins', 'Blue Jays'],
        record: '2-1'
    }]
}

