// => DOM Manipulation

// => Attributes

// 1. gerAttribute(attr) // to get the attribute value
// 2. setAttribute(attr, value) // to set the attribute val th

let div = document.querySelector("div");

console.log(div);

let id = div.getAttribute("id");
console.log(id);
div.setAttribute("class","newClass")
div.setAttribute("id","newId")
