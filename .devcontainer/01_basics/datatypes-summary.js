// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100;
const num = 100.3

const id = Symbol('123');
const anId = Symbol('123');

console.log(id === anId);




// Reference or Non-Primitive

// Array, Objects, Functions

const heros = ["Thor", "Shakti", "Doga"];

let myobj = {
    name: "Ayush",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);
// console.log(myFunction);


// *****************************************************************************

// stack (Primitive), Heap (Non-Primitive)

let name = "Aman";
let anotherName = name;

console.log(name);
//console.log(anotherName);

anotherName = "Ayush";
console.log(anotherName);

let userOne = {
    email: "Aman@gmail.com",
    upi: "aman@ybl"
}

let userTwo = userOne;

console.log(userOne);

console.log(userTwo);

userTwo.email = "Ayush@gmail.com";
userTwo.upi = "Ayush@ybl";

console.log(userOne.email);

console.log(userTwo.upi);


// for primitive type we get the copy of the previous object so , there will be no change in the second object
//for Non-primitve type we use heap memory means we take the reference of other object and it change while changing other.

