// callBack :- 
    // A callback is a function passed as an agrument to nother function.


// function sum(a,b){
//     console.log(a+b);
// }

function calculator(a ,b,callBack){
    callBack(a,b);
}

// calculator(2,3,sum);

//   OR

calculator(2,3,(a,b) => {
    console.log(a+b);
})

//  Callback Hell

/*
    Callback Hell:-    
                Nested callback stacked below one 
    another forming a pyramid structure (pyramid of Doom)


    This style of programming becomes difficult to understand &n manage. 
    
 */


    