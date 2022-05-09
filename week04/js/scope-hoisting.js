// put variables in an app so it limits the scope 
const app = {
    productId: 12345,
    username: 'Joe',
    orderNumber: 789
}

// Global Scope   this variable available from any associated file. 
let productId = 12345 // 3. global scope
function showProductId() {
    console.log(productId)
}
showProductId();
//function scope
function showProductId() {
    let productId = 12345; //2. function scope
    function fix() {
        // 1. let productId = 45678;
        console.log('in fix: ', productId)
    }
    fix();
    console.log('in showProductId: ', productId)
}
showProductId();

// var and hoisting  Use let or const
showProductId();

function showProductId() {
    console.log(123) //hoisted
}
"use scrict";

productId = 1234;

console.log(productId)