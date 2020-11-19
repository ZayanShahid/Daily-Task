
// let a = 5;
// let b = a;
// a = 10;
// console.log(b);    //  Value type

// let a = {"x": 5};
// let b = a;
// a.x = 10;
// console.log(a.x);
// b.x = 20;
// console.log(b.x);     // reference type

// let email = "shahid@gmail.com";
// let parts = email.split("@");
// let username = parts[0];
// let domain = parts[1];




// JS Functions //

// funtion expression
// function func(){
//     console.log("Hi I am function");
// }

// func()   // function calling

// // 1 - Function Names Expression
// // 2 - Anonymous Fuction Expression
// // 3 - Arrow Function

// let data = function(){
//     console.log("Hi I am Anonymous function");
// }

// data()   // function calling


// let products = [
//     {"id":5,"name":"laptop"},
//     {"id":10,"name":"Power Bank"}
// ];

// let result = products.find(function(x){
//     return x.id === 5;
// });

// console.log(result);
// // Output: { id: 5, name: 'laptop' }
// console.log(result.name);
// Output: laptop

// let result1 = products.find(x => x.id == 10);
// console.log(result1.name);

// let func = function(msg){
//     return "some acions for " + msg;
// };
// let res = func("JS");
// console.log(res);

// let res = (x,y) => `Sum is : ${x+y}`;    // Anonymous funciton: lambda == =>
// console.log(res(5,10));

// Built-In Functions://

// Do practice of the following funcitons:

// find
// every
// filter
// some


// OOP//

// Classes
// lastName - Camel
// FirstName - pascal naming

// Classes
//Objects
// 1 - Attributes or Properties

// function Student(){
//     this.id = undefined;
//     this.name = undefined;
//     this.display = function() {
//         return `Id: ${this.id}, Name: ${this.name}`
//     }

// };

// const data1 = new Student();
// const data2 = new Student();
// const data3 = new Student();

// // Data types conversion or casting
// // 1 - Implicit
// // 2 - Explicit

// let n1 = new Number(); // Object
// let n1 = Number(); // number
// let n2 = new String(); 
// let n1 = new Boolean(); 

// // for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// // for in loop
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }

// // for of loop
// for (const iterator of object) {
    
// }

