/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = 'Possum';

animal.name = 'Juan';

animal.noises = [];

console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = 'grrrr';

noises.push('wowoee');

noises.unshift('ssshhhh');

noises[noises.length] = 'mmmm';

console.log(noises.length);

console.log(noises[noises.length - 1]);

console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;

animal.noises.push('iiieee');

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 
    Using dot notation, or using bracket notation with string. 
    
    obtain all keys with Object.keys()
 
 
 * 2. What are the different ways of accessing elements on arrays?
 
    with bracket notation using their index
    
    
 
 
 
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

console.log(animals);

var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};

animals.push(duck);

console.log(animals);

var cat = { 
    species: 'cat', 
    name: 'Tlali', 
    noises: ['meow', 'hiss', 'wail'] 
};

var dog = { 
    species: 'dog', 
    name: 'Firulais', 
    noises: ['bark', 'grrr'] 
};

animals.push(cat, dog);

console.log(animals);

console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Chose an array because it is an index ordered collection that can hold
// other complex data types such as objects. 

var friends = [];

function getRandom(array){
    
    return Math.floor(Math.random() * array.length);
    
}



friends.push(animals[getRandom(animals)].name);

console.log(friends);

animals[0]['friends'] = friends;




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
