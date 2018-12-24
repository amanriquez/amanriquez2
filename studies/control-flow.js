////////////// CONTROL-FLOW ////////////////

/**
 * 
 * In Javascript, statements are executed from top to bottom, but if
 * we want to create branches in our program based on the situation at
 * hand we use control flow. 
 * 
 * This is achieved by conditional statements, so our program can decide
 * based on any given condition, wether to execute a block of code or 
 * move along. We create if statements and force values inside a subsequent 
 * parentheses into boolean for the program to decide wether to run a certain 
 * block of code. 
 * 
 * If, Else If, and Else.
 * 
 * 1.- If (condition) { code to be executed if condition is true }
 * 2.- You can keep changing together -> else if (different conditions) {code}
 * 3.- You can end with an -> else {code to execution if no condition was true}
 * 
 */

//example//

let x = 10;

if (x > 10){
    console.log('x is greater than 10');
} else if (x < 10){
    console.log('x is smaller than 10');
} else {
    console.log('x is 10'); // this option will be logged. 
}

/**
 * 
 * Switch
 * 
 * If you have a lot of different case scenarios it might
 * be useful to use 'Switch', a function with a smaller syntax
 * that will look cleaner. 
 * 
 * The switch statement evaluates an input expression, matching the
 * expressions value to a case clause, and executes statements 
 * associated with that case. break statement should end the case
 * and a default statement end all of them. You can also run one block
 * of code for several different cases. 
 * 
 */
 
//example// 
 
let god = "Shiva";

switch (god) {
	case 'Vishnu':
	case "Brahma":
		console.log('one!');
		break;
	case 'Parvati':
	case 'Lakshimi':
		console.log('fertility, love, fortune, propsperity');
		break;
	case 'Saraswati':
	    console.log('knowledge, music, art, wisdom')
	    break;
	case 'Durga':
	    console.log('warrior godess')
	    break;
	case 'Shiva':
	    console.log('destruction!') // this option will be logged.  
	    break;
		default:
		console.log('who do you worship?');
}

/**
 * 
 * Ternary Operator 
 * 
 * This is a shortcut for the if statemanet, and is the only
 * operator in javascript that takes three operands, the syntax
 * is the following:
 * 
 *    (condition) ? --statement or expression-- : --statement or expression--;
 * 
 *  if the condition is true, the program follows the first statement, to the
 * left of the colon, otherwise if it is false, it executes the code to the 
 * right of the colon. 
 * 
 */
 
//example//

let distance = 100;

let transport = (distance > 75) ? 'train':'bike';

console.log(transport); // prints => 'train'
 