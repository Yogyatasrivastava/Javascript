// array

/* //const myArr = [1, 2, 3, 4, 5];
//const myArr2 = new Array(1, 2, 3, 4, 5); // array constructor
//console.log(myArr);
//console.log(typeof myArr); // object
//console.log(myArr[0]); // 1
const fruits = ["Apple", "Banana", "Orange"]; // array literal
console.log(fruits);
console.log(typeof fruits); // object
console.log(fruits[0]); // apple

// array methods

fruits.push("mango"); // add element at the end
console.log(fruits);
fruits.pop(); // remove element from the end
console.log(fruits);

fruits.unshift("mango"); // add element at the start which is not a good practice because it takes more time to add element at the start
console.log(fruits);
fruits.shift(); // remove element from the start which is not a good practice because it takes more time to remove element from the start
console.log(fruits);

console.log(fruits.length); // 3
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.includes("papaya")); // false
console.log(fruits.reverse()); // [ 'Orange', 'Banana', 'Apple' ]
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Orange' ] // sort in ascending order

const newfruits = fruits.join(", "); // join array elements with a separator
console.log(newfruits); // Apple, Banana, Orange
console.log(typeof newfruits); // string  */



// slice methods and splice methods
const myArr = [1, 2, 3, 4, 5]; 
console.log("A", myArr );
const myn1 = myArr.slice(1, 4) // slice(start, end) end index is not included
console.log(myn1);
console.log("B", myArr ); 

const myn2 = myArr.splice(1, 4) // splice(start, deleteCount) end index is included
console.log(myn2);
console.log("C", myArr );

// slice method is used to create a new array from the existing array without modifying the original array
// splice method is used to modify the original array by removing or adding elements

/* Array
│
├── Stores multiple values
├── Index starts from 0
├── length → Number of elements
├── push() → Add at end
├── pop() → Remove from end
├── shift() → Remove first
├── unshift() → Add at beginning
├── includes() → Check value
├── indexOf() → Find index
├── join() → Convert to string
├── slice() → Copy part (no change)
├── splice() → Add/Remove/Replace (changes original)
├── for / for...of → Loop
├── Stored in Heap Memory
└── typeof [] → "object" */



