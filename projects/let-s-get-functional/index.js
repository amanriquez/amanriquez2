// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-amanriquez');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {

return _.filter(array, person => person.gender === 'male').length;


};

var femaleCount = function(array){
    
   return _.reduce(array, (count, next) => {
        if(next.gender === 'female'){
            count++;
            return count;
        } else{
            return count;
        }
    }, 0);
    
    
};

var oldestCustomer = function(array){
    
    return _.reduce(array, (a,b) => {
        return a.age > b.age ? a:b;
    }).name;
    
};

var youngestCustomer = function(array){
    
    return _.reduce(array, (a,b) => {
        return a.age < b.age ? a:b;
    }).name;
    
};

var averageBalance = function(array){
    
    let balances = _.map(array, person =>{
        return Number(person.balance.replace(/[$,]/g, ''));
    });
    
   let sum = _.reduce(balances, (a,b) => a+b);
   
   return sum/customers.length;
    
};

var firstLetterCount = function(array, letter){
    
    return _.filter(array, person =>{
        return person.name[0] === letter.toUpperCase();
    }).length;
    
    
};

var friendFirstLetterCount = function(array, customer, letter){
    
    let person = _.filter(array, person =>{
        return person.name === customer;
    })[0];
    
    return _.filter(person.friends, friend =>{
        return friend.name[0] === letter.toUpperCase();
    }).length;
    
    
};

var friendsCount = function(array, name){
    
    let arrayOfNames = [];
    
    _.each(array, person => {
        let friends = _.map(person.friends, e => e.name);
        if (friends.includes(name)){
            arrayOfNames.push(person.name);
        }
    }) ;
    
    return arrayOfNames;
    
};

var topThreeTags = function(array){
    

    let tags = _.reduce(array, (tagArray, next) =>{
        return tagArray.concat(next.tags);
    }, []);
    
    let tally = _.reduce(tags, (tally, tag) => {
        tally[tag] = (tally[tag] || 0) + 1 ;
        return tally;
    } , {});
    
  let sortedArray = Object.keys(tally).sort(function (a, b) {
    return tally[a] - tally[b];
    });
    
    return _.last(sortedArray, 3);
    
};

var genderCount = function(array){
    
   return  _.reduce(array, (tally, next) =>{
        tally[next.gender] = (tally[next.gender] || 0) + 1;
        return tally;
    } ,{});
    
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
