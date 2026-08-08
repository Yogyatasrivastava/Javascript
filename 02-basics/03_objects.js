// object literals and by using contructor
// object literals , object ko declare karne ka tarika , first we study about object literals


// symbols = primtive data type to create unique value only  , nd we cant create symbols using new bcz vo object hai constructor nhi  like this ,const id = new symbol("abc") 
// symbol declare = const symbolName = Symbol("description");
const mySum = Symbol("key1")

const user = {
    name : "yogyata",
    [mySum] : 101, // alwys use [] bcz without this  Yahan key string "mySymbol" ban jaygi, Symbol nahi. so as a symbol use karne ke liye hum [] ko use karte hai
    "full name" : "Yogyata Srivastava", //  Agar key me space ho to hum ese bhi likh sakte hai or in this jo normal method hai access karne ka vo nhi use ho payga thats why we use sqr method
    age : 21,
    location : "agra",
    email : "yogyatasrivastava312@gmail.com",
    isLoggedIn : false,
} // this is the method we create object literals , using key and valus

/*// now we access object element
console.log(user.location); // good method but we have more good methods
console.log(user["email"]); // square notation ye ek or method hai 
console.log(user["full name"]);
user.name = "shivangi"; // if you want to update or change value
Object.freeze(user) // after this object doesnt change
console.log(user);
delete user.age; // delete property
console.log(user);
user.colours = "green"; // add new property
console.log(user);
console.log(user[mySum]); // access karne ka tarika 
*/

user.greeting = function(){ // Is line mein hum user object ke andar ek method bana rahe hain.
    console.log("hello yogyata");
}

user.greetingTwo = function(){
    console.log("hello" + this["full name"]);
    console.log("hiii " + this.name);
}
console.log(user.greeting( )); //Don't forget the () because greeting is a function.
console.log(user.greetingTwo());







 

