/*
                                Map Method
        Create a Array with the result of some Operation.
        The value its callBack return are used to form new array.

        arr.map(callBackFun(value , index , array))
*/
let nums = [23,33,21];

let newArr = nums.map((val) => {
        return val *2;
});

console.log(newArr);
console.log(nums);