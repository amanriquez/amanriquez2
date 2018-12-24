////////////// FUNCTIONS //////////////// 


/**
 * 
 * Functions are a kind of 'logic data', they allow us to encapsulate a block
 * of code, and execute it whenever we want and however many times we want. Like
 * a subprogram designed for a particular task. 
 * 
 * They consist of two phases: 
 * 
 *      1) Function Declaration/Definition 
 *      2) Function Invocation/Execution/Calling
 * 
 *  Function Declaration Syntax:
 * 
 * a) as Statement ->
 * 
 *      function doSomething(parameters) { //parameters have a name, and they
 *                                           are replaced by arguments. Which
 *                                           is the actual value
 *           body (code to be executed);
 *           functions' default return value is undefined
 *           but you can have it explicitly return something else
 *    
 *       }
 * 
 * b) as Expression ->
 * 
 *          let doSomething = function(parameters){
 *                  body
 *              }
 * 
 * c) First-Class Functions - > In Javascript all functions are first class 
 *    meaning they can be inside other functions, they can be a function 
 *    parameter and also the return value of a function. To make code more 
 *    compact and readable when passing a function as an argument you can use 
 *    ANONYMOUS and ARROW functions, meaning they are not named and syntax
 *    is much shorter. example: 
 *    
 *      function changeArray(){
 * 
 *          return array.map( (element) => {
 *              code body
 *          });
 * 
 *      }
 * 
 * Function Invocation:
 * 
 *  a) doSomething(); // Replacing the parameters inside the parentheses
 *                       with argument values. 
 * 
 * - Functions are function objects. Because in Javascript everything
 *   that is not a primitve type (undefined, null, boolean, number, string)
 *   is an object! 
 * - Objects are versatile, we can pass a function as a parameter into another funtion!
 * - When a function accepts another as a paremeter = Higher Order Function
 * - ex (Array.prototype.map or Array.prototype.filter)
 * - Function definitions are hoisted, expressions are not (scope)
 * 
 *///example:
 
 
 let myName = 'ARNULFO';
 
 let myLast = 'MANRIQUEZ';
 
 function doThings(str1, str2){
     
     let fullName = str1[0].toUpperCase() + str1.slice(1).toLowerCase() 
     
     + ' ' + str2[0].toUpperCase() + str2.slice(1).toLowerCase();
     
     return fullName;
     
 }
 
 let nombre = doThings(myName, myLast);
 
 console.log(nombre); // output: Arnulfo Manriquez
 
 
///// IIFE - Immediately Invoked Function Expression ////////


/**
 * 
 * A function that runs as soon as it is defined. Design pattern also known
 * as Self-Excuting Anonymous function consisting of two parts
 * 
 *  1) Anonymous function with lexical scope enclosed within the grouping ( )
 *     operator
 * 
 *  2) Second part creates the immediately executing function expression for 
 *     engine to directly interpret function
 * 
 * So Variables within the expression cannot be accesed outside of it, useful
 * for privacy, and assigning IIFE to a variable stores the function result, 
 * not the function itself. 
 * 
 */// example:
 
 
let secret = (function () { 
    var name = "hi!!!"; 
    return name; 
})(); 


console.log(secret); // output: 'hi!!'
 

 
 ////// Function Scope///////

/**
 * Functions can see and modify variables in parent or global scope. the inverse is not true
 * Functions hold its own block of code independent from global scope. 
 * -Expressions are not hoisted to a Global scope so whatrever is in the
 *	{BODY} will remain only there and undefined outside of it. 
*/


const song = 'jammin';


function addSong(title, artist) {
	var song = artist + ': ' + title;
    console.log(song); // Django: Dinette
    return song;
}

console.log(addSong('Dinette', 'Django')); // Django: Dinette

console.log(song); // jammin (we changed song inside addSong(), but outside of its scope song holds initial value)

/**
 * -Global scope: anything outside of a function, the window object in the browser. 
 * -Local scope: local to a function body
 * -functions enclose a scope and protect their variables from parent scopes and global scope - privacy
 * -functions can acces variables in parent scopes! But parent scope cannot acess variables in child scope
*/

let a = 10;
function doThis() {
	a = 1;
}

console.log(a); // prints => 10
doThis();
console.log(a); // prints => 1 'a is accesible inside doThis() scope and can therefore modify it'

function doThat() {
	var x = 3;
	console.log(x);
}

//console.log(x); // prints => ReferenceError: a is not defined

// Nested scopes - function defined within other function //

function doEverything() {
	let b = 'one';
	function doMore(){
		b = 'bee';
	}
	doEverything();
	doMore();
	console.log(b); // 'bee' 'b is accesible within child scope of doMore()'
}

// Closures - Maintaining acces to values by enclosing them in function bodies. //


/**
 *  Closure- an inner function that has access to the outer (enclosing) 
 *    function's variables - scope chain. it has three
 * 
 *  		1.- acces to its own scope (variables defined between its curly brackets)
 *  		2.- Acces to outer function's variables 
 *  		3.- Acces to global variables
 *
 *    - inner function has access to outer function's variables AND parameters
 *    - inner function cannot call the outer function's arguments, even though it 
 *      can call parameters directly
 *    - simply put you create a closure by adding a function inside another function.
 *
 *		1.- Closures have acces to outer function's variable even after outer 
 *          function returns
 *		2.- Closures store references to the outer function's variables, they do 
 *          not store the actual value.
 *		3.- functions form closures around the data they house. If an object returned 
 *          from the Function and is held in memory somewhere (referenced), that closure 
 *          stays ALIVE, and data can continue 
 *  		to exist in these closures! 
 *
*/




