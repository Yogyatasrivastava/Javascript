// using constructor object ko create karna mai

 // const amazonuser = new Object() // this is singleton object

 /*const AmazonUser = {} // non sing object

  AmazonUser.id = "123abc"
  AmazonUser.name = "yogyata"
  AmazonUser.isLoggendIn = false
  
  console.log(AmazonUser);
  
  // objects ke anadr object create karna

  const RegularUser ={}

  name : "yogyata"
  fullname: {
    userfullname:{
        first: "gilli"
        second: "yogy"
    }
  }
  console.log(RegularUser.fullname.userfullname.second);

  // combine objects

  const obj1 = {1 : "a" , 2 : "b"}
  const obj2 = {3 : "a" , 4 : "b"}
  // const obj3 = {obj1,obj2} 
 // console.log(obj3); // output obj ke andr obj aa jayga so we dont use this method

 //const obj3 = Object.assign({} , obj1 , obj2) // {} likhna imp hai
 //console.log(obj3);

 // spread oprator use karege jadatar
 const obj4 = {...obj1,...obj2}
 console.log(obj4);  */

 // data base se value aaygi to ye syntax use karna , alwys value array ke form me aati hai // user array hai isme object nhi
 const users = [
    {
        id: 1, // her ek element object ki tarah use ho rha 
        name: "Yogyata"
    },
    {
        id: 2,
        name: "Rahul"
    },
    {
        id: 3,
        name: "Aman"
    }
];
// Access kaise karte hain?
//console.log(users[0]); // { id: 1, name: "Yogyata" }
//console.log(users[0].name); // yogyata
//console.log(users[1].id);  //2

// properties
console.log(Object.keys(users[0])); //Sirf keys deta hai
console.log(Object.values(users[1])); //Sirf values deta hai
console.log(users[0].hasOwnProperty("name"));//Check karta hai property exist karti hai ya nahi.
console.log(Object.hasOwn(users[1], "name")); // Modern version of hasOwnProperty().
console.log(Object.entries(users[2]));
console.log(Object.seal(users[1])); // add, delete, nhi kr skte but value ko update kar skte ho sirf

// destructuring the object:
const course = {
    subject : "maths",
    price: "999",
    time : "morning"
}
// console.log(course.subject  ); // use karne ka simple method but big hai kaafi

const{subject} = course  // for shorting the method we also use this
console.log(subject);

// also subject bada lag rha to ese bhi likh skte hai
//const{subject : sub} = course
//console.log(sub);







 


 



  
  




  
