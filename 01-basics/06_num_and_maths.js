/*const num = 5;
console.log(num);  // 5
console.log(typeof num); // number

const num1 = new Number(5);
console.log(num1); // [Number: 5]
console.log(typeof num1); // object

// diff is ki num ka data type number hai and num1 ka data type object hai and bcz of object hum num ka data bhi phele se hi fix kar skate hai

// some properties of number methods

console.log(num1.toString());
console.log(num1.toFixed(2)); // 5.00

const num2 = 5.56789;
console.log(num2.toPrecision(3));

const num3 = 100000000;
console.log(num3.toExponential(2)); 
console.log(num3.toLocaleString('en-IN')); // 100,000,000 */

//************************MATH****************************


/*console.log(Math);
console.log(Math.PI);
console.log(Math.E); // Euler's number means the base of natural logarithm
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.abs(-5));  // absolute value means giving positive value
console.log(Math.round(5.6));  // round to nearest integer
console.log(Math.floor(5.6));  // round down
console.log(Math.ceil(5.6));  // round up
console.log(Math.pow(2, 3));  // 2 to the power of 3
console.log(Math.sqrt(16));  // square root
*/


//Math.random() JavaScript ka ek built-in method hai jo 0 (inclusive) se 1 (exclusive) ke beech ek random decimal number generate karta hai.

//Matlab:

// 0 aa sakta hai.
// 1 kabhi nahi aayega.

/* 
0 se 1 ke beech decimal
Math.random()

 0 se n-1
Math.floor(Math.random() * n)

 1 se n
Math.floor(Math.random() * n) + 1

 min se max
Math.floor(Math.random() * (max - min + 1)) + min
 */

console.log(Math.random()); //ka use karke hum random number generate kar sakte hai.
console.log(Math.floor(Math.random() * 10)); // 0 se 9 ke beech random number generate karega
console.log(Math.floor(Math.random() * 10) + 1); // 1 se 10 ke beech random number generate karega
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50); // 50 se 100 ke beech random number generate karega
/* 


100 - 50 + 1

↓

50 + 1

↓

51  Matlab total 51 numbers hain.

Math.floor(Math.random() * 51) + 50

Math.random() = 0.25
0.25 × 51

↓

12.75

Math.floor(12.75)

↓

12

12 + 50

↓
62  

*/
