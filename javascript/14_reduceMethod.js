/* Preforms some operations & reduce the array to a single value. It return that single value */
let arr = [1,3,4,5];

const output = arr.reduce((rec , curr) => {
    return rec+curr; 
});

console.log(output);