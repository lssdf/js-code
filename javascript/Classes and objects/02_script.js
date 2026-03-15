// Classes 

/* 
    Class is a proram-code template for creating objects.

    Those objects will have some state (variables) & some behaviour(function) inside it.

*/

class ToyotaCars{

    constructor(){
        console.log("Hello");
    };

    start() {
        console.log("Engine starting....");
        for (let index = 0; index < 1000000000; index++) {
        }
        console.log("Start!");
    }

    stop() {
        console.log(" The Engine has shut down!")
    }
};          

let fortuner = new ToyotaCars();
let landCruiser = new ToyotaCars();
