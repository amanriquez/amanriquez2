/////////////////STRING MANIPULATION /////////////


/**
 * 
 * In Javascript, methods and properties are available to primitive
 * values, because Javascript treats them as objects when executing
 * such methods and properties. Following is a list of useful string
 * propertied and methods. 
 * 
 */
 
   //////////////////////////////////
 
 //String.length; 
 
 /**
  * Returns the lenth property of a string. 
  * 
  */// example:
  
  console.log('hello'.length); //  output: 5
  
    //////////////////////////////////
  
  //String.prototype.
 
 /**
  * All string instances inherit from String.prototype, it
  * represents the string prototype object. 
  * 
  */
  
    //////////////////////////////////
  
  // String.prototype.indexOf(); //
 
 /**
  * Returns the index of the first occurence of a specified value
  * if not found it returns -1. 
  * 
  * 
  */// example:
  
 var str = 'chihuahua';
  
 console.log(str.indexOf('h')); // output: 1
  
  //////////////////////////////////
  
  // String.prototype.charAt(); //
 
 /**
  * Returns a new string consisting of the single UTF-16 
  * code unit located at specified index of the string. If
  * you want the code number itself use charCodeAt().
  * 
  */// example:
  
  let str2 = 'chihuahua';
  
  console.log(str2.charAt('1')); // output: 'h'
  
  
    //////////////////////////////////
  
  // String.prototype.concat(); //
 
 /**
  * Combines the text of two or more strings and returns 
  * a new string
  * 
  */// example:
  
  let str3 = 'exit';
  
  let news = str3.concat('ing');
  
  console.log(news); // output: 'exiting'
  
 /////////////////////////////////////
  
 // String.prototype.replace(); ////
 
 /**
  * Returns a new string with with some or all matches replaced
  * by a replacement. Takes two arguments, the first argument
  * is the pattern to be replaces and it can be a regular expression
  * or a string. The second argument is the replacement and it
  * can be a string or a function to be called for each match. 
  * 
  * -Original string if left unchanged. 
  * 
  */// example:
  
    let str4 = 'come find my mojo and try to take it';
  
    let str5 = str4.replace(/mojo/gi, 'mama');
  
    console.log(str5);  
    
    //output: 'come find my mama and try to take it'

  
  
  //////////////////////////////////////
  
  //// String.prototype.slice(); ////
 
 /**
  * Extracts a section of a string and returns it as a new
  * string, without modyfying the original string.
  * 
  * Takes two parameter, first is the zero based index at which 
  * to begin extraction. Second one is index at which to stop, and not
  * including it. 
  * 
  * You can also use negative numbers to begin extracting from 
  * right to left, for example (0, -1 would) return a new string with the 
  * last character from original string gone. 
  * 
  * Also if no second parameter is given method will assume it'll give
  * back the rest of the string, something very useful when working
  * with recursion, where you keep shortening your string from left to right
  * by just performing .slice(1) recursively. 
  * 
  */// example:
  
  let str6 =  'oh no I fear I will be sliced';
  
  console.log(str6.slice(5, 19)); // output: 'I fear I will'
  
 
 ////////////////////////////////////////
  
 //////  String.prototype.split(); //////
 
 /**
  * splits a string object into an array of substrings by using
  * a specified separator string to detarmine where to make the split
  * if it is given an empty string it will separate the original string 
  * by each character.
  * 
  */// example:
  
  let sentence = "Hi I am a beautiful sentence";
  
  console.log(sentence.split(' '));
  
  //output: [ 'Hi', 'I', 'am', 'a', 'beautiful', 'sentence' ]
  
  
  //////////////////////////////////////////////
  
  
 //////  String.prototype.toLowerCase(); //////
 
 /**
  * makes all characters in a string lower case, opposite 
  * to .toUpperCase(), which you can guess what it does. 
  * 
  */// example:
  
  let stringo = 'TeEnAgERS lOvE dOiNg this ThaNk YoU mEtHoD';
  
  console.log(stringo.toLowerCase());
  
  //output: 'teenagers love doing this thank you method'
  
  ////////////////////////////////////////
  
  ////// String.prototype.trim(); //////
 
 /**
  * Removes white space from both ends of a string
  * 
  */// example:
  
  
    let greeting = '   Hello world!   ';

    console.log(greeting.trim());
    
    //  output: "Hello world!";
  
 ////////////////////////////////////////
  
 ////// String.prototype.endsWith();////// 
 
 /**
  * checks if a string ends with a specified character and returns a boolean
  * its opposite would be .startsWith(.)
  * 
  */// example:
  
  
    let wordsOfWisdom = 'word';

    console.log(wordsOfWisdom.endsWith('d'));
    
    //  output: true
  
 ////////////////////////////////////////
  
  
  ////// String.prototype.search(); //////
 
 /**
  * Finds if a regular expression match is found in a string and 
  * returns the index, if it is not found it returns -1. 
  * 
  */// example:
  
  let findMe = 'where is the Capital hiding?';
  
  console.log(findMe.search(/[A-Z]/gi));
  
  //output: 13
  
  
 ////////////////////////////////////////
  
 //////  String.prototype.includes(); //////
 
 /**
  * Determines wether a string is included within another string and
  * returns a Boolean. 
  * 
  */// example:
  
  let stringylingy = 'ay ay ay ay, canta y no llores';
  
  console.log(stringylingy.includes('canta')); // output: true;
  
  
  //////////////////////////////////
  
 
 /**
  * 
  * A couple more things you can do to strings: 
  * 
  * -you can concatenate them with the + operator
  * -You can get specific characters with array index notation
  *  so if str = 'hello', str[0] is 'h';
  * -you can turn them into arrays and then do to them 
  *  all the things you could do to an array. like splice, very useful. 
  * 
  * 
  */// example:
 
 let stringUnaware = "I didn't know I was going to be reversed";
 
 let stringReversed = stringUnaware.split('').reverse().join('');
 
 console.log(stringReversed); 
 
 // output: 'desrever eb ot gniog saw I wonk t'ndid I'