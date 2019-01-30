////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {

let arri = [];

if (start > end && step === undefined) step = -1;

if (start < end && step === undefined) step = 1;

if (start < end && step < 0) return arri;


if (start < end ){
for (let i = start; i <= end; i += step){
  arri.push(i);
}
} else if (start > end){
  
  for (let i = start; i >= end; i -= step){
    arri.push(i);
  }
  
}


return arri;


}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {

if (array.length === 0) return 0;

return array.reduce( (a, b) => a + b);



}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {

let newArr = [];

for (var i = array.length - 1; i > -1; i--){

  newArr.push(array[i]);
  
}

return newArr;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {


for (let i = 0; i < Math.floor(array.length/2); i++){
  
  let hold = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = hold;
  
  
}

return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

let list = null;

for (let i = array.length - 1; i > -1; i--){
  list = {value: array[i], rest: list};
}

return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {

let array = [];

for (let node = list; node; node = node.rest){
  
  array.push(node.value);
  
}

return array;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
return {value: value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {

if (!list) return undefined;

if (num === 0) return list.value;

return nth(list.rest, num -1);




}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  
  // compare two empty objects
  //compare two numbers
  //compare two falsey values
  //two objects with same properties and values
  //two objects with same properties and different values
  //two objects with identical nested arrays
  //two objects with unique nested arrays
  //two objects with nested objects
  
  if (obj1 ===  obj2){
    return true;
  }
  
  
  if (typeof obj1 !== 'object' || typeof obj2 !==  'object' || obj1 === null || obj2 === null){
    return false;
  }
  
  let props1 = Object.keys(obj1);
  let props2 = Object.keys(obj2);
  
  if(props1.length !== props2.length){
    return false;
  }
  
   for (let key of props1) {
    if (!props2.includes(key) || !deepEqual(obj1[key], obj2[key])){
      return false;
    } 
  }

  return true;
  
    



}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
