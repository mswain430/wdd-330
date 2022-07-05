
 $(para).addClass('important').append('<p>Another Paragraph</p>');
 para.classList.add('important');
const newPara = document.createElement('p');
newPara.textContent = 'Another Paragraph';
para.appendChild(newPara);

function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}

sayHello.call(clark, 'How do you do');
// 'How do you do, my name is Clark'

sayHello.call(bruce);
 // 'Hello, my name is Bruce'


 const dice = {
sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log('Before the roll');

const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 1){
        setTimeout(()=>{resolve(n)},n*200);
    } else {
        setTimeout(()=>reject(n),n*200);
    }
});

roll.then(result => console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );

console.log('After the roll');
