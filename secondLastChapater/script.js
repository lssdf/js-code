//Normal code Synchronous hota h 

// console.log("One");
// console.log("Two");
// console.log("Three");

// Asynchronous :-

/* 
    Due to sychronous programming, sometimes imp instructions get blocked due to some previous instruction, which causes a delay in the UI.

    Asynchronous code execution allows to execute nest instructions immediately and doesn't block the flow.
*/

   
    let name = "Harendra Godara";
        
        setTimeout(() => {
            console.log(name);
        }, 1000);
    
     