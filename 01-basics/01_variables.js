const accountName = 12345 //const = "This variable will always refer to the same value."
let accountEmail = "yogyatasrivas1234@gmail.com" //let = "I know I'll reassign this variable later."
var accountPassword = "212121"
let accountCity = "kanpur"
/* prefer not use in var bcz of prblm in scope , mordern world me let use hota hai jada*/
// accountName = 2 // not allowed const change nhi hota
accountEmail ="manisha@1234.com"
accountPassword = "9897"
accountCity = "agra"
console.log([accountEmail,accountName,accountPassword,accountCity])
//If the variable doesn't need to be assigned a new value, use const.
//If you know the variable will get a new value later, use let.