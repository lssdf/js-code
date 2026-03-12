/* Create a new array of element that give true for a condition/filter
    Eg. all Even element */
    
let nums = [22 , 12, 10 , 11];

let newArr = nums.filter((val) => {
    return val%2 === 0;
});

console.log(newArr);
console.table(nums);