let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2\3)
// console.log(2%3)

let name = "Harendra";
let lastName = " Godara";
let fullName = name + lastName;
console.log(fullName);
/*
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");*/


console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
The reason is that an euality chack == and comparison > < >= <= work differently

comparison convert null to a number, treating as a 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// ===  (comparison strictly hota hain datatype bhi check krta hain)

console.log("2" === 2)


//                    primitive (call by value)

// 7 Types : String , Number , Boolean , null , undefined , symbol , BigInt



const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 6545631545465n


//                      Reference (Non primitive)


// 3 Types : Array , Object , Functions


const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
        name:   "Harendra",
        age:  21,

}
console.log(heros)
console.log(myObj)


const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof )



