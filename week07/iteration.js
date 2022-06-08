const colors = ['Red', 'Green', 'Blue']
// for loop
for(let i = 0, max = colors.length ; i < max ; i++ ) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}

colors.forEach( (color,index) =>
    console.log(`Color at position ${index}  is ${color}`) )

 // using map()
[1,2,3].map( square )
// doubles the numbers
[1,2,3].map( x => 2 * x);

// to uppercase
['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` );

['red','green','blue'].map( (color, index, array) => `Element ${index} is ${color}. There are ${array.length} items in total.` );
// [ 'Element 0 is red. There are 3 items in total.',
//'Element 1 is green. There are 3 items in total.',
//'Element 2 is blue. There are 3 items in total.' ]

//reduce
[1,2,3,4,5].reduce( (acc,val) => prev + val );
// 15

const sentence = 'The quick brown fox jumped over the lazy dog'

// split()
sentence.split();

// reduce
const total = words.reduce( (acc,word) => acc + word.length,0 );
// 36

const numbers = [ 2, 7, 6, 5, 11, 23, 12 ]

numbers.filter(x => x%2 === 0 ); // this returns true if the number is even

const array = [ 0, 1, '0', false, true, 'hello' ];
array.filter(Boolean);
// [ 1, '0', true, 'hello' ]

array.filter(x => !x);
// [ 0, false ]

// chaining
[1,2,3].map( x => x*x ).reduce((acc,x) => acc + x );
// 14

const sales = [ 100, 230, 55];
totalAfterTaxSales = sales.map( (amount) => amount * 1.15 ).reduce( (acc,val) => acc + val );
// 442.75

function mean(array) {
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}

function mean(array,callback) {
    if (callback) {
    array.map( callback );
    }
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}