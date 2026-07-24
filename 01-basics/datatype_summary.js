// interview type summary
/* JavaScript me Data Types do categories me divide hote hain:

1. Primitive Data Types (Simple / Single Value)
2. Non-Primitive Data Types (Reference Data Types) 

1. Primitive Data Types (call by value)

👉 Primitive data types single value store karte hain.
Ye immutable hote hain (value change nahi hoti, nayi value create hoti hai).

JavaScript me 7 Primitive Data Types hote hain:

Data Type	Example	Meaning
Number	10, 3.14	Numbers
String	"Hello"	Text
Boolean	true, false	True/False
Undefined	let a;	Variable declare hai but value nahi di
Null	let a = null;	Intentionally empty value
BigInt	12345678901234567890n	Bahut bade numbers
Symbol	Symbol("id")	Unique value
Example
let age = 20;           // Number
let name = "Yogyata";   // String
let isStudent = true;   // Boolean
let city;               // Undefined
let marks = null;       // Null
let big = 12345678901234567890n; // BigInt
let id = Symbol("id");  // Symbol


2. Non-Primitive Data Types (call by reference)
Ye multiple values store kar sakte hain.

Ye mutable hote hain.

Mostly Heap Memory me store hote hain.

Examples:

Object 
let student = {
    name: "Yogyata",
    age: 20
}; 

Array
let fruits = ["Apple", "Banana", "Orange"];

Function
function greet() {
    console.log("Hello, World!");
}

let a = [1, 2];
let b = [1, 2];

console.log(a == b);
output: false
// kyuki dono alag alag memory me store hote hain



*****************************************************************
stack (primitive) and heap(non primitive) memory :

Stack aur Heap Memory JavaScript ka bahut important concept hai. Agar ye samajh aa gaya, to primitive vs non-primitive, call by value vs reference, sab automatically clear ho jayega.


Memory Kya Hoti Hai?

Jab bhi tum JavaScript me variable banate ho:

let name = "Yogyata";

JavaScript us value ko computer ki memory me store karta hai.

Memory ko simple way me do parts me samajhte hain:

Stack = Primitive = Actual Value = Copy of Value 
Heap = Object/Array/Function = Reference = Same Address 












*/