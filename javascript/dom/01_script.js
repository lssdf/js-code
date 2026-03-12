// DOM Manipulation

//getElementById() returns the HTML element object with the specified id. If no element is found, it returns null.

let heading = document.getElementById("first");
console.dir(heading);

/*
1️⃣ Ye multiple elements return karta hai
2️⃣ Return type HTMLCollection hota hai
3️⃣ Elements ko index se access karte hain ([0], [1], etc.) 
*/


let headings = document.getElementsByClassName("main");
console.dir(headings);
console.log(headings);
/*
1️⃣ Ye multiple elements return karta hai
2️⃣ Return type HTMLCollection hota hai
3️⃣ Elements ko index [ ] se access karte hain
*/

let parahs = document.getElementsByTagName("p");

console.log(parahs);
console.dir(parahs);



// => document.QuearySelector

/*
document.querySelector() DOM method hai jo CSS selector use karke element select karta hai.


1️⃣ Ye CSS selectors use karta hai
2️⃣ Ye sirf first matching element return karta hai
3️⃣ Agar element nahi mila to null return karta hai
*/
let firstEl = document.querySelector("p"); // 1st element

console.dir(firstEl);

let allEl = document.querySelectorAll("p");// all elements
console.dir(allEl);

