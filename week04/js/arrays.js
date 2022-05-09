   //NOTES on Arrays/
   
 // Creating and Initializing Arrays</h3>  

// Create 
let values = " [1,2,3];   // three elements 
console.log(values); 
console.log(Array.isArray(values)); // is this object an array 
 
 let values = Array.of(1,2,3); 

//Accessing Array Items 
 let values = ['a', 'b', 'c'];
console.log(values[0]);
values[0] = 'aaa';  //changing the value

//Manipulating Arrays
////push   //adds to the array at the end
 const values = ['a', 'b', 'c'];
   
values.push('d');  //adds to the array at the end
values.push ('e','f', 'g'); //add multiple elements 
console.log(values); //a b c d
    
    //pop()  //takes an element off the end
        const last = values.pop();console.log(last); //pops off the last value
    //shift()  //moves the entire array
    const first = values.shift(); console.log(first); // a
    //unshift()  // adds the value to the beginning of the array 
    values.unshift('a'); //adds a to beginning 
    values.unshift('hello');  //adds hello to beginning
    values.unshift('hello', 'world');  //adds hello world to beginning
//slice() and splice()
//slice() //creates a brand new array 
 const values = ['a', 'b', 'c'];<br/>
    const newValues = values.slice(1,2)    //start (1), ending element(2)  // new array -- makes a copy 
    console.log(newValues);  // b
   //splice()  //inserting or deleting items within the array/
     const values = ['a', 'b', 'c'];<br/>
        const newValues = values.splice(1,1)    //index (1), number of items to delete(1)    
        console.log(newValues) //a, c 
        const newValues = values.splice(1, 0, 'foo')    //index (1), number of items to delete(0), item to insert 'foo'    
        console.log(newValues);  // a foo b c
//Array Searching and looping
//indexOf()   //Allows us to get the index of a value of an array
 const values = ['a', 'b', 'c'];<br/>
console.log(values.indexOf('c')); // 2  We know the value within the array
console.log(values.indexOf('d')); // -1  'd' doesn't exist
//filter()/
 const values = ['a', 'b', 'c'];<br/>
const set = values.filter(function(item){
    return item > 'b';
{);