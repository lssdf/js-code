// Event Liteners 

/* 
    node.addEventListener(event, callback)
    node.removeEventListener(event, callback)

    NOTE: the callback reference should be same to remove

*/

let btn1 = document.querySelector('#btn1');

btn1.addEventListener("click",(evt)=>{
    console.log("Hi i am Harsh");
});

btn1.addEventListener("click",(evt)=>{
    console.log("Hello");
});

const hadler3 = () =>{
    console.log("World");
}

btn1.addEventListener("click",(evt)=>{
    console.log("hey");
});

btn1.removeEventListener("click",hadler3);