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

console.log(typeof myFunction);
console.log(myFunction);

