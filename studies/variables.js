/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  
 * Variables are named identifiers that can point to values of a particular type, like 
 * a Number, String, Boolean, Array, Object or another data-type.  Variables are called 
 * so because once created, we can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * LET - is a container for reassignable values with a block scope that are 
 * also not hoisted to the top of their blockscope. 
 * 
 * - declare variables limited in block scope, statement or expression in which
 *   it is used, unlike var which defines variables globally, locally, or to
 *   an entire function regardless of block scope. 
 * -they are also available in contained sub-blocks, 'In this way, let works very 
 *  much like var. The main difference is that the scope of a var variable is 
 *  the entire enclosing function:' -MDN
 * 
 */// example: 
 
let x = 4;

if (x === 4) {
  let x = 2;

  console.log(x); // output: 2
}

console.log(x);  // output: 1

/**
 * CONST - container for values that can never change, they are block scoped
 * and not hoisted to the top of their block scope. They must be assigned a 
 * value immediately. some syntax rules recommend naming consts in uppercase
 * 
 * 
 */
 
 const ANIMAL = 'giraffe';
 
 ANIMAL = 'zebra'; // error, cannot reassign. 
 
 
 // Hoisting //

/*
*
* Javascript's default behavior of moving declarations to the top
* at run time.
*
* 1.- Variable Declarations and Function Declarations
* 2.- Taken to the top of their scope
* 3.- Different Types hoisted differently
*	  a) variables: 
*		-only name
*		-can be declared anywhere
*		-available anywhere in scope -  before or after declaration
*		-no value until assigned
*	  b)functions: 
*		-name AND body
*		-can be declared anywhere
*		-available anywhere in scope - before or after declarations
*		-assigned value at all times
*
*/

