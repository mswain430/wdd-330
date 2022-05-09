   //NOTES on Arrays/
   
 // Creating and Initializing Arrays</h3>  

// Create 
let values1 =  [1,2,3];   // three elements 
console.log(values1); 
console.log(Array.isArray(values1)); // is this object an array 
 
 let values2 = Array.of(1,2,3); 

//Accessing Array Items 
 let values3 = ['a', 'b', 'c'];
console.log(values3[0]);
values[0] = 'aaa';  //changing the value

//Manipulating Arrays
////push   //adds to the array at the end
 const values4 = ['a', 'b', 'c'];
   
values4.push('d');  //adds to the array at the end
values4.push ('e','f', 'g'); //add multiple elements 
console.log(values4); //a b c d
    
    //pop()  //takes an element off the end
        const last = values4.pop();console.log(last); //pops off the last value
    //shift()  //moves the entire array
    const first = values4.shift(); console.log(first); // a
    //unshift()  // adds the value to the beginning of the array 
    values4.unshift('a'); //adds a to beginning 
    values4.unshift('hello');  //adds hello to beginning
    values4.unshift('hello', 'world');  //adds hello world to beginning
//slice() and splice()
//slice() //creates a brand new array 
 const values5 = ['a', 'b', 'c'];
    const newValues5 = values5.slice(1,2)    //start (1), ending element(2)  // new array -- makes a copy 
    console.log(newValues5);  // b
   //splice()  //inserting or deleting items within the array/
     const values6 = ['a', 'b', 'c'];
        const newValues6 = values.splice(1,1)    //index (1), number of items to delete(1)    
        console.log(newValues6) //a, c 
        const newValues7 = values6.splice(1, 0, 'foo')    //index (1), number of items to delete(0), item to insert 'foo'    
        console.log(newValues7);  // a foo b c
//Array Searching and looping
//indexOf()   //Allows us to get the index of a value of an array
 const values7 = ['a', 'b', 'c'];
console.log(values7.indexOf('c')); // 2  We know the value within the array
console.log(values7.indexOf('d')); // -1  'd' doesn't exist
//filter()/
 const values8 = ['a', 'b', 'c'];
const set = values8.filter (function(item) {
    return item > 'b';
} );