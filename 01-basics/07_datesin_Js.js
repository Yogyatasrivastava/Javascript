// DATE  = JavaScript me Date ek built-in object hai jisse hum current date, time, day, month, year, etc. nikal sakte hain ya apni custom date bana sakte hain.

/*let today = new Date();
console.log(today);
console.log(today.getDate()); // current date
console.log(today.toLocaleDateString()); // current date in local format
console.log(today.getDay()); // current day in number (0-6) 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
console.log(today.toISOString()); // current date in ISO format
console.log(today.getFullYear()); // current year
console.log(today.getHours()); // current hour


let myBirthday = new Date(2005,2,5);
console.log(myBirthday);
console.log(myBirthday.toLocaleDateString());
console.log(myBirthday.toDateString()); // Sat Mar 05 2005 */

// TIMESTAMP = JavaScript me timestamp ek number hota hai jo 1 January 1970 se lekar ab tak ke milliseconds ko represent karta hai. Iska use hum date aur time ko compare karne ke liye karte hain.

/*let myBirthday = new Date(2005,2,5);
let timestamp = Date.now(); // current timestamp in milliseconds
console.log(timestamp);
console.log(myBirthday.getTime()); // timestamp of my birthday in milliseconds
console.log(Math.floor(Date.now()/1000)); // current timestamp in seconds , highly asked in interviews , Math.floor ka use karke hum decimal value ko avoid kar skte hain
console.log(typeof timestamp);// number*/


let date1 = new Date();
console.log(date1.toLocaleString('default' , {
    weekday: 'long', 
    timeZoneName: 'short', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})); // current date and time in local format


let date2 = new Date(2024, 5, 20, 10, 30, 0);
console.log(date2.toLocaleString('default' , {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",}));
    



