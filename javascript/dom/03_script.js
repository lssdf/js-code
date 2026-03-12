// change Style

// let div = document.querySelector("div");

// console.dir(div.style)

// div.style.backgroundColor = "green";

// div.style.fontSize = "15px"
// div.style.visibility = "hidden"

// --------*****--------------*************----

// Insert Elements

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");

div.append(newBtn);

div.before(newBtn);

div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new </i>"

document.querySelector("body").prepend(newHeading);





