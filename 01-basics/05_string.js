const name = "yogyata";
const age = 21;

console.log(name + " is " + age + " years old."); // yogyata is 21 years old , context me + ka use string concatenation ke liye hota hai 

// new way of string concatenation using template literals (backticks) 

console.log(`${name} is ${age} years old.`); // yogyata is 21 years old.

const studentName = new String("Yogyata");
console.log(studentName);
console.log(typeof studentName); // object
console.log(studentName[0]); // Y
console.log(studentName.length); // 8
console.log(studentName.toUpperCase()); // YOGYATA
console.log(studentName.toLowerCase()); // yogyata
console.log(studentName.includes("Yog")); // true
console.log(studentName.charAt(5)); // t
console.log(studentName.indexOf("g")); // 2 
console.log(studentName.replace("Yogyata", "Yogy")); // Yogy
console.log(studentName.split("")); // [ 'Y', 'o', 'g', 'y', 'a', 't', 'a' ]
console.log(studentName.substring(0, 5)); // yogya note: substring me end index ka character include hota hai , not included neagative index
console.log(studentName.slice(0, 5)); // yogya note: slice me end index ka character include nahi hota hai , included neagative index 
/*  Yaad rakhne ki trick 
substring():
Negative → 0
start > end → swap kar deta hai

slice():
Negative → end se count karta hai
start > end → "" (empty string)

output: "JavaScript".substring(-3, 4); // "Java"
"JavaScript".slice(-3, 4);     // ""

*/

const newTeacher = new String("  manisha   ");
console.log(newTeacher); // manisha before trim
console.log(newTeacher.trim()); // manisha  after trim
console.log(newTeacher.trimStart()); // manisha    after trimStart
console.log(newTeacher.trimEnd()); // manisha      after trimEnd 

const url = "https://www.google.com/yogyata%20srivastava"
console.log(url.replace("%20", "-")); // https://www.google.com/yogyata-srivastava
console.log(url.includes("google")); // true  

/* This is one of the most asked interview questions.
string is immutable in JavaScript. Immutable means you cannot change individual characters.

let str = "Java";

str[0] = "K";

console.log(str);

Output

Java

Nothing changes.      */ 



 