// This coin-seeder is not part of the app. It is run separately only to fill in the mongodb data.
// type node coin-seeder.js to execute the file.

var Coin = require('../model/coin');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/authng2');

// creating an array of objects to fill the db
var coins = [
    new Coin({
        title: 'Silver Maple',
        description: 'Canadian silver maple leaf coin',
        year: 2016,
        country: 'Canada',
        material: 'silver',
        finess: '9999',
        weight: '1oz',
        price: 30,
        quantity: 10,
        imagePath: '../../images/1.jpg'
    }),
    new Coin({
        title: 'Silver Cougar',
        description: 'Canadian silver cougar coin',
        year: 2012,
        country: 'Canada',
        material: 'silver',
        finess: '9999',
        weight: '1oz',
        price: 35,
        quantity: 20,
        imagePath: '../../images/2.jpg'
    }),
    new Coin({
        title: 'Silver Moose',
        description: 'Canadian silver moose coin',
        year: 2012,
        country: 'Canada',
        material: 'silver',
        finess: '9999',
        weight: '1oz',
        price: 40,
        quantity: 15,
        imagePath: '../../images/3.jpg'
    }),
    new Coin({
        title: 'Silver Wood Bison',
        description: 'Canadian silver wood bison coin',
        year: 2013,
        country: 'Canada',
        material: 'silver',
        finess: '9999',
        weight: '1oz',
        price: 33,
        quantity: 25,
        imagePath: '../../images/4.jpg'
    }),
    new Coin({
        title: 'Silver Wolf',
        description: 'Canadian silver wolf coin',
        year: 2011,
        country: 'Canada',
        material: 'silver',
        finess: '9999',
        weight: '1oz',
        price: 45,
        quantity: 5,
        imagePath: '../../images/5.jpg'
    })
];

var done=0;

// loop through the products array to save each product into mongodb.
// the save() function is asynchronous so theres a callback function to disconnect mongodb once products is saved into mongodb
for(var i = 0; i<coins.length; i++) {
    coins[i].save(function(err, result){
        done++;
        if (done===coins.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}