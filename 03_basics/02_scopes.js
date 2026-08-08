//Global Scope
//Jo variable (array) kisi bhi function ya block ke bahar declare hota hai, use global scope kehte hain.
//Local Scope (Function Scope)
//Agar array function ke andar declare ho to sirf wahi use kar sakte hain.
// scpoe means curly braces

// nested function 

let college = "ABESIT";   // Global Scope

function outer() {         // Outer Scope

    let name = "Yogyata";

    function inner() {     // Inner Scope

        let age = 21;

        console.log(college);
        console.log(name);
        console.log(age);
    }

    inner();
}

outer();    // ABESIT  Yogyata  21 output

// if else scope 

if (true) {
    let name = "Yogyata";
    console.log(name);
}

// console.log(name);  error aaya bcz scope ke bahar and vale elemnt ko reach nhi kr sakte 

// about function we can declare two wayss
// first method  ,ish method me hum addone(5) vala part phele bhi declare kar skte the koi error nhi aayga
// like this 
//addone(5)
function addone(num){    
    return num + 1;
}
console.log(addone(5)); 
  
// 2nd method
const addTwo = function(num){
    return  num + 2;
}
console.log(addTwo(7));
 