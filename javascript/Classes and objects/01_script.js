/* Object  
    A javaScript object is an entity having state and behavior (Properties and method).

    JS objects have a special property called prototype.

    We can set prototype Using __proto__

*/

/* 
   NOTE: If objects & prototype have same method object's method will be used.
*/

// const student = {
//     fullName: "Harendra",
//     age: 22,
//     marks: 94.2,
//     printMarks: () =>
//     {
//         console.log("Marks = " , this.marks);
//     },
// };


const employee = {
    calTax(){
        console.log("Tax reate is 10%");

    },
};

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__ = employee;