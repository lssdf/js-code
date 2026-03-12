/*
    arr.forEach(callBackFuncation)

    callBackFunction = Here, it is a function to execute for each element in the array.

    *A callBackFunction is a function passed as an argument of another function.

*/

let arr = [1,2,3,4,5]; 
    // arr.forEach(function name(value , index , array itself))
arr.forEach(function printVal(val , idx , arr) {
    console.log(val , idx , arr);
})