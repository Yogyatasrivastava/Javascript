/*const students = ["John", "Jane", "James"];
const colors = ["Red", "Green", "Blue"];

 const arr1 = [...students]; // means ...students array expand ho jayga 
 arr1.push(colors);
console.log(arr1); // Output: ["John", "Jane", "James", ["Red", "Green", "Blue"]]

const newStudents = students.concat(colors);
console.log(newStudents); // gives new array Output: ["John", "Jane", "James", "Red", "Green", "Blue"]

// next method is to use the spread operator
const spreadStudents = [...students, ...colors];
console.log(spreadStudents); //  Output: ["John", "Jane", "James", "Red", "Green", "Blue"]   spread operator is more efficient than concat method because it creates a new array and adds the elements of the existing arrays to it, while concat method creates a new array and adds the elements of the existing arrays to it.
*/
// flat is a method where it is used to flatten the array. It takes an optional argument that specifies the depth level to which the array should be flattened. If no argument is provided, it flattens the array to a depth of 1.
const arr2 = [1,2,3,[4,5,6],7,[6,7,8,[9,10]]];
const newarr2 = arr2.flat(2);
console.log(newarr2); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9, 10]

console.log (Array.isArray("yogyata")); 
console.log(Array.from("yogyata")); // Output: ["y", "o", "g", "y", "a", "t", "a"] it converts the string into an array of characters. Array.from() is a method that creates a new array from an array-like or iterable object. In this case, the string "yogyata" is an iterable object, so Array.from() creates a new array with each character of the string as an element.


// console.log(Array.from({ name: "Yogyata" }));
// output : [] 
//  { name: "Yogyata" } is not iterable and is not an array-like object (it doesn't have a length property), so Array.from() returns an empty array.
// interview common question

