// //JS Basic or PF-Programming Fundamentals
// //JS OOP
// //JS DS
//---------------------------------------------
// console.log('Hi Mr. Shahid. Welcome To JavaScript Language');     // string value displaying
// // in JS vs Python: for output in JS we use "console.log" on "print" palce in python.
// console.log(234);     // number value
// console.log(34235.23); // flaot
// console.log(true);  // boolean
// console.log({"id": 4, "name": "Shahid"});  // Object:-(Python's dictionary is called object in JS)
// console.log([3,4,"txt",34.3]);  // array
// console.log(null);    // null value
// console.log(undefined);    //    
// console.log(NaN);        // Not a Null value
// console.log("value",[2,3,4,5],true,234234.52);   // can add multiple elements in output command statment
// console.log(); //  to show docs mark pointer on console click by pressing ctrl button.
//-----------------------------------------------------
// JS Data Types:
// - value type or Primitive Type or simple type (no refence type value)
// - reference type or non- primitive  or complex type
//------------------------------------------------------
// Primitive Types//
// 1 - Number
// 2 - Boolean
// 3 - string
// 4 - null
// 5 - undefined
// 6 - symbol
//----------------------
// complex Type (ref. type)//
// 1 - array
// 2 - functions
// 3 - objects
// 4 - WeakMap
// 5 - classes
// 6 - interfaces
//---------------------

// JS Variables
// assigning variables
// var a = 23443
// var b = "shahid"
// var c = true
// var d = null
// var e = undefined
// var x = 34, y = 45

// console.log(typeof(a));  // output of type of var a
// console.log(typeof b);  // output of type of var b
// console.log(typeof c );  // output of type of var c
// console.log(typeof d);  // output of type of var d
// console.log(typeof e);  // output of type of var e
// console.log(x+y);

// typeof,typeof()
// ES6
// let a = 5;    // number   
// a = 'xyz'
// console.log(typeof a);  string

// const b = 5;    // numebr
// console.log(typeof b); // number

//_------------------------------------------

// var $ = 4
// var _a = 5
// we can assign any name to a variable to define
// //-----------------------------------------------------
// let a;
// console.log(typeof a);  // undefined output of an undefined variable

// //-------------------------------------------------------
// let a;
// a = "shahid";
// console.log(a);
//---------------------------------------------------------

// undefined vs null

// console.log(undefined == null);  // true
// console.log(1 == false);  // false
// console.log(1 == true);  // true
// console.log(0 == true);  // false
// console.log("" == true);  // false
// console.log("" == false);  // true
// console.log("" === false);  // false
//--------------------------------------------------------

// JS Strings

// ' '
// " "
// ` `  --- string templete

//-------------------------------

// let id = 5;
// let name = "Shahid";
// // console.log(4+5+'abc'+20+32+234); // before string will add but after string concate values as a string values
// // console.log('Name:', name, "  ID:", id);
// // console.log(4+5+'abc'+(20+32+234));
// console.log(`My name is ${name} and my id is ${id}.`); // (`templete string`) is used on the place of f'string method in python

//// Complex type:
// JS Objects:
const data = {
    "id" : 5,
    "name": "Shahid",
    "ExtraData": {
        "Degree": "JS",
        "skills": ["JS","Python"]
    }
};
data.ExtraData.skills[0] = "JS Node";        //  update
data.ExtraData.skills.push("java", "SQL");    // add     push(...items: T[]): number;
data.ExtraData.skills.pop();                 // pop(): T | undefined; removes last element of an array
data.ExtraData.skills.splice(1,1,"TS");      // insert     splice(start: number, deleteCount: number, ...items: T[]): T[];
data.ExtraData.skills.unshift("C++");       //  add value at first ----> unshift(...items: T[]): number;
data.ExtraData.skills.shift();              //   shift(): T | undefined;
console.log(`My name is ${data.name} and my id is ${data.id}.`);
console.log(`My name is ${data.name} and my id is ${data.id} Degree ${data.ExtraData.Degree}`);
console.log(`My name is ${data.name} and my id is ${data.id} Degree ${data.ExtraData.skills[0]}`);
console.log(`My name is ${data.name} and my id is ${data.id} Degree ${data.ExtraData.skills}`);
console.log(data.ExtraData.skills);