// const user = {   // user is object 
//     name : "yogyata" ,
//     age : 21,

//     //Object ke andar Function is called (Method) , nrml function declartion vala syntax yha nhi use karenge
//     welcomeMessage : function(){
//         console.log(this.name);  // this us object ko refer karta hai jisne current method ko call kiya hai.
//     } 
//     // yahan
//     // welcomeMessage property ka naam (key) hai.
//     // function () {} us property ki value hai.
//     // Ek rule yaad rakhna
// // Object ke bahar → Function Declaration
// // function greet() {}

// // Object ke andar → Method
// // const obj = {
// //     greet: function () {}
// // }
// }

// ---------------------code me dekhte hai ab --------------------------

const user = {  // object create
    name: "Yogyata",   // name key nd key ki value yogyata
    age : 21,

    welcomeMessage: function() { // Yahan ek function object ke andar store ho raha hai., key is welcome... nd value is function
        console.log(this.name);
        console.log(this); // scope ke andr hai not globaly output object ki property aa jaygi
    }
}
user.welcomeMessage()
user.name = "yug"   //  change kar diya
user.welcomeMessage()
//console.log(this);  global use kar rhe to output empty aayga


// Agar browser me global scope par this keyword likhte ho: example
// console.log(this);
// output
// Window {...}

// butt ,Ab wahi this ka Node.js me likho 
// console.log(this);
// output 
// {}   empty output aayga

//_________________________________________________________________
// function me this keyword ka use nhi kar skte undefined aayga
// example,
// function momo() {
//     let stallname = "mahanmomo"
//     console.log(this.stallname);
// }
//  momo()  // output undefined

// ARROW FUNCTION------------ arrow function JavaScript ka ek short syntax hai function likhne ka.
// const momo = () => {
//     let stallname = "mahanmomo"
//     console.log(this.stallname);
// }
// momo()    // output undefined

// explicit return
const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));  

// implicit return = no need of parantheses nd return keyword 
const addTwo = (num1 , num2) => (num1 + num2)
console.log(addTwo(3,4));  

// both are same bus likhne ka format alg hai dono ka nd note 1 point if curly braces hai return likhna padega if () if yr lga hai to nhi 

// OBJECT RETURN KARNA HO TO---------

const user = () => {   // output undefined
    name: "Yogyata"
}       

const user = () => ({   // { name: "Yogyata" }   right method
    name: "Yogyata"
});

console.log(user());


//-----------------------------------------------------------------
// IIFE most imp interview question
//IIFE = Immediately Invoked Function Expression
// means = Function banaya aur usi waqt usko call bhi kar diya.

// nrml function
function greet() {  // Pehle function banta hai, phir alag se call karte hain.
    console.log("Hello");
}

greet();

// IIFE 
(function(){
    console.log("hello");
})();
//Interview Question  why we use semicolon in last
//JavaScript kabhi-kabhi dono ko ek hi expression samajh leta hai aur error de sakta hai.
// Isliye har IIFE ke baad ; lagana best practice hai.

// IIFE 
//Create a Private Scope
//"Execute Code Immediately"
//Prevents Variables from Polluting Global Scope
// avoids naming conflicts with other scripts.  








