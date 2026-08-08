//----------THEORY-------------------
// JavaScript ek time par sirf ek hi kaam karta hai. thats why it is single thread
// Execution Context = Environment jahan JavaScript code execute hota hai.
// JavaScript me kitne type ke Execution Context hote hain?
// 1. Global Execution Context (GEC)
// Program start hote hi banta hai.

// 2. Function Execution Context
// Har baar jab function call hota hai.
// Har Function ka apna Execution Context hota hai

// => Execution Context ke andar kya hota hai?
// Har execution context me 2 phase hote hain.

// Execution Context , JavaScript ka code do phases me execute hota hai
// ↓
// Memory Creation Phase
// ↓
// Code Execution Phase


// =>.. CALL STACK 
// follow lifo principal , last in first out

function one(){
    console.log("One");
}

function two(){
    console.log("Two");

    one();

    console.log("Two End");
}

function three(){

    console.log("Three");

    two();

    console.log("Three End");

}

three();
// // call stack step
// 1 first global
// 2 then call three() bcz global me hai vo or sbse phele global ka call hoga
// = call stack 
// three()
// Global

// 3 three print 
// = call stack
// two()
// three()
// Global

// now 
// Inside two

// console.log("Two")

// Output

// Three
// Two

// Ab

// one()
// one()

// two()

// three()

// Global

// Output

// Three
// Two
// One

// one finish

// two()

// three()

// Global

// Output

// Two End

// two finish

// three()

// Global

// Output

// Three End

// three finish

// Global

// Global finish

// EMPTY

// Final Output

// Three
// Two
// One
// Two End
// Three End
// Execution Context aur Call Stack ka relation

// Har baar jab koi function call hota hai:

// Us function ka Execution Context banta hai.
// Us context ko Call Stack ke top par push kiya jata hai.
// Function execute hota hai.
// Function complete hote hi uska context stack se pop ho jata hai.

// Diagram:

// Call Stack

// Top
// ────────────
// one()      ← Execution Context of one()
// ────────────
// two()      ← Execution Context of two()
// ────────────
// three()    ← Execution Context of three()
// ────────────
// Global     ← Global Execution Context
// ────────────
// Bottom

// Jab one() complete hota hai:

// Call Stack

// Top
// ────────────
// two()
// ────────────
// three()
// ────────────
// Global
// ────────────


// -----------------------------------------------------------------
// JavaScript Program Starts
//         │
//         ▼
// Global Execution Context Create
//         │
//         ▼
// Memory Creation Phase
// (Variables, Functions register hote hain)
//         │
//         ▼
// Code Execution Phase
// (Line by line execution)
//         │
//         ▼
// Function Call?
//         │
//       Yes
//         ▼
// New Function Execution Context
//         │
//         ▼
// Push into Call Stack
//         │
//         ▼
// Execute Function
//         │
//         ▼
// Return
//         │
//         ▼
// Pop from Call Stack
//         │
//         ▼
// Continue Remaining Code
//         │
//         ▼
// Program Ends → Call Stack Empty
