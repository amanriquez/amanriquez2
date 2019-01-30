/////////// LOOPS - ITERATION/////////////////



/**
 * Used to repeatedly run a block of code until a certain condition is met.
 * Same thing as iteration, to repeat an action a certain number of times.
 * 
 * 1) While statement executes its statements as long as a specified condition
 *    evaluates to true. If condition becomes false, statement within loop stops
 *    executing and control passes to statement following loop. You usually also
 *    change something inside the block, like establishing a counter. 
 * 
 *    It is very important to ensure that the stopping condition will be met
 *    at some point, otherwise the loop will run infinitely and make your 
 *    program crash. 
 * 
 *      syntax:
 * 
 *          while ( condition) {
 *                statement      
 *                  (body also generally includes an update of a certain variable
 *                  that at some point will evaluate to false when tested by condition,
 *                  this variable can be declared right before the loop or be anywhere 
 *                  in scope)
 *            }
 * 
 */// example:
 
 let x = 2;
 
 while (x < 10){
     
    if (x % 2 === 0){
        console.log('number is probably even!');
    }
    
    x++;
     
 }
 
 // output: will log output 4 times! but will be checked 8 times. 
 
 
/**
 * 
 * The FOR statement creates a loop with three optional expressions and a body
 * statement:
 * 
 * 1) Initial expression or variable declaration - typically initializes a counter
 * variable. Here you can declare new variables with var or let. if declared with var
 * this will be in the same scope as the loop and will not be local to the loop.
 * The result of this expression is then discarded
 * 2) Condition - the stopping condition, an expression that is evaluated before each
 * iteration. if it evaluates to true, the statement is executed. if it evaluates to 
 * false it stops. 'execution skips to the first exression following the for construct'
 * 3) expression evaluated at the end of each loop iteration, before the next evaluation
 * of the stopping condition. It is generally used to update the counter variable. 
 * 
 * The statement is executed for each iteration as long as the condition evaluates to true. 
 * 
 * Good to iterate over array data collections. 
 * 
 *   syntax:
 * 
 *          for (initialize expression; stopping condition; expression changes){
 *                      
 *                  statement
 * 
 *              }
 * 
 * 
 */// example:
 
 
 let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
 
 let vowels = [];
 
 for (let i = 0; i < myArray.length; i++){
     if (myArray[i] === 'a' || myArray[i] === 'e' || myArray[i] === 'i'){
         vowels.push(myArray[i]);
     }
 }
 
 console.log(vowels); // output: [ 'a', 'e', 'i' ]
 
 //looping backwards over an array:
 
 let numbers = [1,2,3,4,5,6,7];
 
 for (let i = numbers.length - 1; i > -1; i--){
     console.log(numbers[i]);
 }
 
 // output: 7, 6, 5, 4, 3, 2, 1
 
/**
 * 
 * To loop over the key/value pairs in an object you use the FOR...IN loop
 * it pulls out all the keys of an object one by one, and you can use the key
 * string values to obtain the object values, push them into an array, or 
 * perform an action on them, etc. 
 * 
 * WARNING: don't use dot-syntax! Always use Array syntax 
 *   when dynamically accessing elements in the object.
 * 
 * 
 */// example:

var object = {
    name: 'Squirrel',
    color: 'red',
    attitude: 'wild',
};

for (var key in object){
    console.log(object[key]); // logs Squirrel, red, wild
    console.log(object.key); // logs undefined,undefined, undefined
    console.log(key); // logs name, color, smell
}
