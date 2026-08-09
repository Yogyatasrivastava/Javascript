// reduce() method
//reduce() array ke har element ko process karke ek final accumulated result return karta hai.
 const array1 = [1, 2, 3, 4, 5];

 const initialValue = 0;
// const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// console.log(sum); // Output: 15

// also,write the same code in a more readable way
// const sum2 = array1.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue; // curly braces use karne se aapko return statement ka use karna padega
// }, initialValue);

// accumulator → previous value, currentValue → current value, initialValue → starting value
// accumulator ka initial value 0 hai, aur currentValue array ke har element ko represent karta hai .
// in the first iteration, accumulator is 0 and currentValue is 1, so the result is 0 + 1 = 1. In the second iteration, accumulator is 1 and currentValue is 2, so the result is 1 + 2 = 3. In the third iteration, accumulator is 3 and currentValue is 3, so the result is 3 + 3 = 6. In the fourth iteration, accumulator is 6 and currentValue is 4, so the result is 6 + 4 = 10. In the fifth iteration, accumulator is 10 and currentValue is 5, so the result is 10 + 5 = 15. Finally, reduce() returns the final accumulated value which is 15.


// more readable way of writing the same code
const sum3 = array1.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    const newValue = accumulator + currentValue;
    return newValue;
}, initialValue);