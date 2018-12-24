//////////////////DATATYPES /////////////////////

// 1) Number //

/**
 * 
 *  - There is only one type of number in javascript, unlike other 
 *    programming languages where you have float and int.
 *  - there is also Number(), a wrapper object allowing you to work with 
 *    numerical values. 
 *  - always a 64-bit floating point. 
 *  - Which means numbers are accurate up to 15 points. 
 *  - you can assign any number to any variable. 
 *  - You can write numbers in scientific notation with exponent 
 * 
*/


let x = 6;

const y = 3.24;

let hello = -3;

3e-4 === 0.0003;


/**
 * It will be useful to convert numbers to strings and strings to numbers
 * which can be done with the following operations.
 * 
 */
 
 // Number to String //
 
 
let num = 10;

let n = num.toString();

console.log(n); // output: '10'

/**
 * For string to Number there are several options:
 * 
 * 1) parseInt() parses a string and returns an integer, with a second radix
 *    parameter to determine numeral system. If it is omitted and string begins
 *    with 0 javascript assumes its octal, with any other number it is decimal.
 *  
 *    Only first number is returned. So anything after a floating point is not
 *    returned, and if the first character cannot be converted it returns NaN. 
 * 
 * 2) parseFloat() like previous one, it is a top level function not associated
 *    with any object. Parses its argument and returns a floating point number.
 *    If it encounters a character other than a number, decimal point, exponent
 *    or (+ or -) sign it ignores that character and all succeeding characters. 
 * 
 * 
 * 3) Or Number() constructor for type conversion of object or boolean values  //
 *
 */
 
parseInt("96.00"); // 96
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt("   15   "); // 15
parseInt("20 apples"); // 20

parseFloat('3.14'); // 3.14
parseFloat('314e-2'); //3.14

Number(true); // 1
Number(false); // 0
Number('42'); // 42
Number('32 34'); // NaN


// perform arithmetic operations on numbers, following math precedence order //

10/5 === 2;

10*10 === 100;

10 + 20 - 5 === 25;

10 % 3 === 1; // Modulo operand give you the remainder of a division. 

/**
 *  -if you add two string numbers, the result is a string concatenation
 *  - if you add a number and a string, result is also a concatenation
 *  - however javascript will try to convert strings into numbers 
 *    in all numeric operations. 
*/

let h = '45'
let c = '34'

let z = h + c; // prints => '4534'


// Math  //

/**
 * 
 *  - Math is a built in object that has properties and methods 
 *     for mathematical constants and functions. 
 *  - Not a constructor, all its porperties are static, for ex
 * 
 *          - Math.PI
 *          - MAth.E  
 * 
 *   -Methods are useful built in functions to work with numbers
 * 
*/

// exapmples //

Math.abs(); // returns absolute value of a number. 

Math.ceil(); // Returns the smallest integer greater than or equal to a number

Math.floor(); // Returns the largest integer less than or equal to a number

Math.log(); // Returns the natural logarithm of a number

Math.sqrt(); // Returns the positive square root of a number




// 2) String //

/**
 *   -Used to represent text; enclosed content in quotes. 
 *   - you can use either double quotes, single quotes, backticks or mark strings 
 *      as long as they match
 *   -You can escape characters with backlash \
 *   - \n for new line
 *   -modeled as series of bits based on Unicode standard,
 *   - JS uses 16 bits per string element, which can describe up to 2^16 different  
 *     characters, Unciode has twice as many so some characters take two "character 
 *     positions"
 *   - + operator does not add, it concatenates!
 *   - When you compare two strings ( < > ) you are comparing not their length
 *     but their alphabetical order (Javascript goes over characters from left to right). 
 *     However upper case letters are always less than lowercase. Non-alphabetic 
 *     characters are included in the order. 
*/

var hi ='Hello';

var place = 'Galaxy';

var concatenate = hi + ' ' + place; //  prints => 'Hello Galaxy'

concatenate + ' and far Away'; // prints => "Hello Galazxy and far Away"



/**
 * Template Literals: 
 * 
 * -use back apostrophes
 * -They can span string lines and embed computable values to be 
 *  converted to a string inside ${.....}
 *
*/

console.log(`half of 100 is ${100/2}`) // prints => "half of 100 is 50"


// 3) Boolean // 

/**
 *  - Logical datatype that can only have two values - true and false. perfect 
 *    for control flow, swithces on and off.
 *  - one way to produce boolean values is through comparison.
 *
 * 
*/

// example // 

console.log(10 < 1); // returns false.
console.log(10 > 1); // returns true. 
console.log('Paranguricutirimicuaro' > 'ai'); // returns false.

//you can force values to true or false, based on their truthiness or falsiness

// 0 is falsey
//1 is truthy


// 4) Array //

/*
* -0 indexed, ordered lists. We use them to hold many of the same type of thing
* -several array methods that we can work with. also has length property
*
*/

var myArray = [];

myArray.push('merry', 'christmas'); 
// adds argument to end of array, returns new length.

console.log(myArray); // prints => ['merry', 'christmas']

myArray.reverse(); // prints => ['christmas', 'merry']


// Other methods to manipulate Array. //

var alphabet = ['a', 'b', 'c', 'd']

alphabet.pop(); 
// prints => ['a', 'b', 'c'], d removes last item in array, returns removed item

alphabet.shift(); // ['b', 'c'] // removes first item in Array

alphabet.unshift('z'); // ['z', 'b', 'c'] 
// adds argument to beginning of Array, returns new length

//alphabet.join(' and '); // 'z and b and c' 
// joins elements in array into a string joined by accepted argument, 
//with join() you can specify the separator. 

alphabet[alphabet.length] =  'd'; 
// ['z', 'b', 'c', 'd'] // append new element to array

delete alphabet[0]; // ['b', 'c', 'd']


alphabet = ['b', 'c', 'd'];

let chingon = alphabet.splice(1, 1, 'r');

console.log(chingon); // ['c']

console.log(alphabet); // ['b', 'r', 'd']


/**
 * * 
* SPLICE()
* - the first parameter defines the position where new elements 
*   should be added(spliced in)
* - second parameter defines how many elements should be removed
* -the rest of the parameters define new elements to be added
* -splice() returns an array with the deleted items.
*
*/

alphabet = ['b', 'r', 'd']; 

let betabet = ['x', 'y', 'z'];

var loco = alphabet.concat(betabet);

console.log(loco); // prints => [ 'b', 'r', 'd', 'x', 'y', 'z' ]

//toString() converts an array to a string of comma separated array values

// slice() slices out a piece of an array into a new array
//it creates a new array, AND does not remove any elements from source array

console.log(loco.slice(3)); // prints => ['x','y', 'z']
// can take two arguments 1) start argument 2) up to (but not including) end argument


/**
 * 
 *  // sort() // 
 * 
 * -sorts things alphabetically, not for numbers!
 * -you can also add your own function to sort. 
 *
 * 
*/


//// 5) Objects /////

/**
 * -Collections of key/value pairs, used to group data that describes a thing. 
 *  properties and their value. 
 * - Unlike primitive values, they are mutable, its propertied can be modified
 *   and they are copied by reference not by value. 
 * - basis of object oriented progrmaming - idea of dividing programs into
 *   smaller pieces and make each piece responsible for managing its own state. 
 * 
*/

let person = {
    firstName: 'Johnny',
    lastName: 'Cash',
    eyes: 'black',
    height: 1.70,
};

console.log(Object.keys(person)); // prints => [ 'firstName', 'lastName', 'eyes', 'height' ]


// console.log(Object.values(person)); // prints => [ 'Johnny', 'Cash', 'black', 1.70 ]


console.log(person.hasOwnProperty('eyes')); // prints => true

person.hair = 'black'; 

console.log(person); /* prints => { firstName: 'Johnny',
    lastName: 'Cash',
    eyes: 'black',
    height: 1.70,
    hair: 'black' }
*/

person['gender'] = 'male'; 

console.log(person); /* prints => { firstName: 'Johnny',
    lastName: 'Cash',
    eyes: 'black',
    height: 1.70,
    hair: 'black' 
    gender: 'male'  }
*/


person.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

console.log(person.fullName()); // prints => Johnny Cash

//this alwyas points to 'owner of the function'


// 6) Function // 

/**
 *  -allow us to encapsulate block of code and execute it whenever 
 *   we want and how ever many times. 
 *  -a list of instructions encapsulated in block of code so we don't have to repeat it
 *  -you can pass around code and execute instructions later. 
 *  -Two phases
 *	    1.- Declaration/Definition: create the function!
 *      2.-Invocating/Calling/Executing/Applying
 *
 * 
*/

function myFunction(parameterOne, parameterTwo) {
	// function body
}


// 7) Undefined //

/**
 * 
 *-Things yield undefined simply because they have to yield some value.
 *
*/

var myDog;

console.log(myDog); // prints => undefined // there is no value assigned to var myDog;


// 8) null // 

/**
 * 
 * - Also absence of a meaningful value. I think when something is 
 *   null it is specifically nullified by programmer...
 * - however " difference in meaning with undefined is an accident of design
 *   doesn't matter most of the time, they are interchangeable"
 *  - no string conversion 
 *  - to test whether value is real instead of null or undefined, compare it to null with (==) or (!=)
 *
*/

console.log(null == undefined); //  prints => true
console.log(null == 0); // prints => false



// 9) NaN //

/**
 *	- part of three special values in JavaScript that are 
 *    considered numbers
 *	  but don't behave like normal numbers.
 *	- NaN = Not a Number
 *	- Yet it's still it is a value of the number type
 *	- result of numeric operations that don't have a meaningul 
 *    result.
 *	- if you go donw NaN rabbit-hole look for accidental type 
 *    conversions/coercions
 *
 *          Infinity - Infinity === NaN;
 *
 *          0/0 === NaN;
 *
*/

// 10) Infinity and -infinity //

/**
 * - they represent positive and negative infinities.
 *
 * - infinity-based computation is not mathematically sound and will quickly lead to NaN
 *
*/

Infinity - 1 === Infinity;

// 11) Primitive/Simple Data Types //

/**
 *  Simple data type are numbers, strings, boolean, NaN, undefined and null
 *
 *
 * 1.- Atomic, immutable: they do not collect or aggregate other values,
 *	operations on simple values return new simple values, they
 *	do not alter original value. 
 * 2.- Copy by Value - when assigning or passing, simple data-types are copied
 *	from one variable to the next. 
 *
*/

var a = 10;
var b = a; // value stored in a copied into b

b = 8; // changing value at b doesn't affect a storage. 


// 12) Passing to a function by copy or by reference. //


/**
 * 1.- Complex values aggregate other values and are therefore of indefinite size
 * 2.- Copy by Reference - when assigning or passing, complex data types
 *	   are typed by reference. 
 *
*/


var escandalo = {divo: 'Rafael'};

var noche = escandalo; 

/**
 * value stored in b is Reference to value stored in a
 * they now both point to the same object.
*/

noche.divo = 'Serrat'; 

/**
 * Changing value at b affects all references 
 * because the value is referencing  the same object. 
 *
*/

console.log(escandalo.divo); // prints => 'Serrat'






