// for(let i = 0; i < 5; i++){
//     console.log(i);
// } // basic for loop

// break and continue
// for(let i = 0; i < 5; i++){
//     if(i==3){
//         continue; // skip the rest of the loop body when i equals 3
//     }
//     console.log(i);
// }

// for(let i = 0; i < 5; i++){
//     if(i==3){
//         console.log(`break the 5`);
        
//         break; // exit the loop when i equals 3
//     }
//     console.log(i);
// }

// //while loop 
//  let i = 0;
//  while(i<5){
//     console.log(`value of i is ${i}`);
//     i++;
//  }

 // array while loop 
 let myArray = [1,2,3,4,5];
 let index = 0;
 while(index < myArray.length){
    console.log(`value of element at index ${index} is ${myArray[index]}`);
    index++;
 }

 // do while loop
 let j = 0;
 do {  // first execute the loop body and then check the condition
    console.log(`value of j is ${j}`);
    j++;
 } while(j < 5);
