// array specific loops

// 1 for of
// for...of loop ka use array, string, set, map jaise iterable data ke values ko ek-ek karke access karne ke liye hota hai.

// syntax
// for (const variable of iterable) {
//     // Code to execute
// }

const myArray = [10, 20, 30, 40, 50];

for(const element of myArray){
    console.log(element);
} // o/p → 10, 20, 30, 40, 50

const greet = "hello yuggg"

for(const char of greet){
    console.log(char);
} // o/p → h, e, l, l, o,  , y, u, g, g, g

// for...in → Index deta hai

// for in (array)
const arr = [10, 20, 30];
for (const index in arr) {
    console.log(index);
} // o/p → 0, 1, 2

//Agar value chahiye to index se access karo.
const arr = [10, 20, 30];
for (const index in arr) {
    console.log(arr[index]);
} // o/p → 10, 20, 30

// for...in → Keys/Indexes ke liye
// for...of → Values ke liye
// for .. of objects ke liye use nahi hota hai. Objects ke liye for...in loop ka use hota hai. bcz objects are not iterable.
// for of use hota hai nd Map ki enumerable properties nahi hoti, isliye for...in use nahi hota.
//for...in → Object ki enumerable keys/properties ke liye
// for...of → Iterable data (Array, String, Map, Set) ke liye

// Maps    
//A Map is a JavaScript collection that stores data in key-value pairs, just like an object.
// Feature	                 Object             	Map
// Stores key-value pairs	  ✅	                  ✅
// Keys can be any data type  (only String/Symbol)	✅
// Iterable with for...of	   ❌                  ✅
// Built-in methods	           ❌	              ✅ (set, get, has, delete)
// Size           	Object.keys(obj).length        map.size
// Best for          	Fixed properties	Dynamic key-value storage

const map = new Map();
map.set("name", "Yogyata");
map.set("age", 21);

for (let item of map) {
    console.log(item);
} // o/p → [ 'name', 'Yogyata' ], [ 'age', 21 ]

// better way to access key and value separately
for (let [key, value] of map) {
    console.log(key, value);
} // o/p → name Yogyata, age 21

console.log(map.get("name")); // o/p → Yogyata
console.log(map.size); // o/p → 2
console.log(map.delete("age")); 

// Agar interviewer puche "What are the properties of Map?", to technically sahi answer hoga:

// Property: size
// Methods: set(), get(), has(), delete(), clear(), keys(), values(), entries(), forEach()




// FOR EACH LOOP
// forEach() ek array method hai jo array ke har element par ek function execute karta hai.
// The forEach() method is not executed for empty elements.
// The forEach() method does not change the original array.

// Syntax
// array.forEach(function(value, index, array) {
    // code
//});

const coding =["JavaScript", "Python", "Java"]
coding.forEach((item) => {
    console.log(item);
});

// another method
const coding =["JavaScript", "Python", "Java"]
coding.forEach(function (item){
    console.log(item);
});

// forEach() method me 3 parameters hote hai: value, index, array.
const coding =["JavaScript", "Python", "Java"]
coding.forEach((item, index, array) => {
    console.log(item, index, array);
});

// ARRAY KE ANDAR OBJECTS-------------- [{}{}{}]

const users = [
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Bob",
        age: 30
    },
    {
        name: "Charlie",
        age: 35
    }
]
users.forEach((item) => {
    console.log(item.name, item.age);
});

// NOTE: forEach() method me return statement ka use nahi hota hai. Agar aapko return value chahiye to aap map() method ka use kar sakte ho.

const numbers = [1, 2, 3, 4, 5];
const values = numbers.forEach((item)=>{
    console.log(item);
})
console.log(values); // o/p → undefined, kyuki forEach() method return value nahi deta hai.

// FIlter() method
// filter() ek array method hai jo condition ke basis par elements ko filter (select) karta hai aur ek nayi array return karta hai.
// filter() method ek array method hai jo ek naya array return karta hai jisme wo elements hote hai jo condition ko satisfy karte hai.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const num = [ 1,2,3,4,5,6,7,8,9];
const evenNumbers = num.filter((item) => {
    return item % 2 === 0; // condition to filter even numbers
});
console.log(evenNumbers); // o/p → [ 2, 4, 6, 8 ]

// another method
const num = [ 1,2,3,4,5,6,7,8,9];
const evenNumbers = num.filter((item) => item % 2 === 0); // if the function body has only one statement, so  we can skip the curly braces and the return statement vala part. This is called implicit return.
console.log(evenNumbers); // o/p → [ 2, 4, 6, 8 ]

// ------------------------------
// filter() VS	forEach()
// Nayi array return karta hai	,Kuch return nahi karta (undefined)
// Condition ke basis par elements select karta hai ,	Har element par code execute karta hai
// Original array change nahi hoti	, Original array tabhi change hogi jab tum manually modify karoge

// chaining 

const students = [
    { name: "Aman", marks: 80 },
    { name: "Yogyata", marks: 95 },
    { name: "Riya", marks: 60 }
];

const result = students
    .filter(student => student.marks >= 75)
    .map(student => student.name);

console.log(result); // o/p → [ 'Aman', 'Yogyata' ] 