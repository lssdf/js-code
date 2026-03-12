const num = 400;

const balance = new Number(100);
console.log(num);
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 123.53

console.log(otherNumber.toPrecision(2));


// yaha e = *10^ hota h
// jaise 123.53 ko scientific notation m 1.2*10^2 => 1.2e+2


const  hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'));


//---------------------------MATH-----------------------------------

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));

console.log(Math.floor(4.8));



console.log(Math.pow(2,5));

let arr = [3, 7, 2, 9];

console.log(Math.min(2,3,54,0,12));


console.log(Math.min(...arr));
console.log(Math.max(...arr));

console.log(Math.random());

console.log(Math.floor(Math.random()*10)+1)  // minimun value 1 aayegi

const min = 4;
const max = 10;

console.log(Math.floor( Math.random() * (max-min))+1);

















