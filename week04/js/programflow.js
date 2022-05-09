//if ... else Statements

//if condition true do this

if (5 === 5) {
    console.log(yes) // true
}

let state = "FL";
let taxPercent = 7;

if (state = 'FL') { //check for an inequality
    taxPercent = 7;
} else if (state === "NY") {
    taxPercent = 8.875
} else { taxPercent = 0; }

console.log(taxPercent);


if (true) {
    showMessage('true')
}
price = 20
    //price >== 15)
if (price >= 15) {
    showMessage('discounted')
}

if (+(1.1 + 1.3).toFixed(2) !== 2.4) { // + sign converts this to a string   convert floating point to .toFixed
    showMessage('true')
}
//truthy falsy expressons
//0 is true
//Every number is true, except 0
//comparing === to ==
// === // equality

// the ternary Operator

// (condition) ? true-statement : false-statement

let message = (price > 10) ? 'expensive' : 'cheap'
showMessage(message); //expensive  if price = 20

//loops: for, while, do..while
//for
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// 0 1 2 3 4 5     i-- //infinite loop  - never completes because condition always true exit browser - need to restart server

//while
let i = 0;
while (i < 5) {
    console.log(i)
    i++;
}

// do... while  tests after execution. 
let count = 1;
do {
    console.log(count);
    count++;
} while (count < 5);
// 1 2 3 4