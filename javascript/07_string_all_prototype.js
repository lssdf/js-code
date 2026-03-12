    // includes()
/* JavaScript me includes() method ka use check karne ke liye hota hai ki ek string (ya array) me koi specific substring (ya element) exist karta hai ya nahi.

Ye method true/false return karta hai.*/

let file = "report.pdf";

if (file.includes(".pdf")) {
  console.log("This is a PDF file.");
} else {
  console.log("Not a PDF file.");
}


        //indexOf()
/* JavaScript me indexOf() method ka use kisi substring (ya element) ki position find karne ke liye hota hai.

Ye method index number return karta hai agar substring/match milta hai, aur agar match nahi milta → -1 return karta hai. */

let text = "Harendra Godara";

if (text.indexOf("Godara") !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}

        // isWellFormed()
/* Ye JavaScript me string method hai jo check karta hai ki string valid Unicode sequence me hai ya nahi.

Ye method mainly ES2021 (ECMAScript 2021) me introduce hua tha aur Unicode characters (especially surrogate pairs / emoji) ke sath kaam aata hai.

Ye true or false return krta hai.

true → agar string valid UTF-16 sequence me hai

false → agar string me invalid Unicode (unpaired surrogates) hai

*/
let emoji = "😊";
console.log(emoji.isWellFormed());  // true

let invalidStr = "\uD800";  // high surrogate without low surrogate
console.log(invalidStr.isWellFormed()); // false

// Explanation:
// UTF-16 me high surrogate (\uD800–\uDBFF) ke sath low surrogate (\uDC00–\uDFFF) hona chahiye. Agar missing ho → invalid.


