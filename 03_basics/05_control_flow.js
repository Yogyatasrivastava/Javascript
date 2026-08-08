// control flow 
// │
// ├── if
// ├── if else
// ├── else if
// ├── nested if
// ├── switch
// ├── ternary operator
// ├── truthy & falsy
// ├── nullish coalescing ??
// ├── logical operators
// ├── short circuit
// ├── break
// ├── continue

// Curly Braces
if(true) console.log("Hi"); // Allowed but not recommended.

// else if = used for multiple condition
let marks = 78;

if(marks>=90){
    console.log("A");
}
else if(marks>=75){
    console.log("B");
}
else if(marks>=60){
    console.log("C");
}
else{
    console.log("Fail");
}

// nested if
let age = 22;
let hasID = true;

if(age>=18){

    if(hasID){
        console.log("Entry");
    }

}
// Comparison Operators
// >

// <

// >=

// <=

// ==   Checks only value.

// ===    Checks Value AND Datatype

// !=

// !==

//-----------------------------------------------
// falsy value
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// truthy value
// "0"
// "false"
// []
// {}
// 42
// -1
// function(){}

//------------------------------------------------
// Nullish Coalescing Operator (??)
// Ye sirf null aur undefined ko check karta hai.
// let name = null;

// console.log(name ?? "Guest");  // output guest

// ternary Operator

// Short form of if...else.
// Syntax:
// condition ? valueIfTrue : valueIfFalse;
// Example:
// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);
// Output:
// Adult

// Switch Statement

// Jab ek hi variable ki multiple fixed values compare karni ho.

// let day = 3;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid");
// }
