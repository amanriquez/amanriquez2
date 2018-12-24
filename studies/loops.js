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
 *      syntax:
 * 
 *          while ( condition) {
 *                statement          
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
 
 // output: will log output 4 times! but will checked 8 times. 
 
 
/**
 * 
 * The FOR loop repeats until a specified condition evaluates to false. First
 * the initial expression is executed, which usually initializes loop counters
 * syntax allows complex expressions and variable declaration. the loop statement
 * executes, until value of condition is false, then the for loop terminates, and
 * so on with the third statement performing an increment. Good to iterate
 * over array data collections. 
 * 
 *   syntax:
 * 
 *          for (initial expression; condition; increment expression){
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
