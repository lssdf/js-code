// Arrays

const myArr=[0,1,2,3,4,5];

let myHeros = ['Iroman','Thor','Captain Amarica'];
console.log(myArr);
// console.table(myHeros);

const myArr2 = new Array(1,2,3,5);

// console.log(myArr2);

//          Array method 

myArr.push(6);
myArr.push(7);

console.log(myArr);

myArr.pop();
myArr.pop();
console.log(myArr);

// starting m value add krne ke liye "unshift" ka use krte h 

myArr.unshift(12);

console.log(myArr);


// starting se value delet ke liye "shift" use krte h 

console.log(myArr.includes(4)); // check krne ke liye ki value array m hai ya nahi 
console.log(myArr.indexOf(5));// value ka index batane ke liye use krte hai

myHeros = myArr.join();

console.log(myHeros);
console.log(typeof myHeros);



//      slice , splice


console.log("A ", myArr);

const newArr = myArr.slice(1,3);

console.log(newArr);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3);

console.log("C ",myArr);
console.log(myn2);