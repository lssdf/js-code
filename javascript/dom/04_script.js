// Events in java script

/* 
    The change in the state of an object is known as an Event
Events are fired to notify code of "intersting changes" that may affect code execution.

*/

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) =>{
    alert("Hello Harsh Choudhary!")
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);

}

// Event Object 

/* 
    It is a special object that has details about the event.

    All event handlers have access to the Event object's properties and methods.

*/

