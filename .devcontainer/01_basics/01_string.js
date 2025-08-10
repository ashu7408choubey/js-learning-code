const name = "Ayush";
const repoCount = 20;

//console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ayush-choubey-rokz');

// console.log(gameName[0]);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);

//console.log(newString);

const anotherString = gameName.slice(-3, 4);

//console.log(anotherString);

const newString1 = "    Ayush    ";
//console.log(newString1);

console.log(newString1.trim());

const url = "https://hitesh.com/Ayush%20choubey"

console.log(url.replace('%20', '_'));
console.log(url.includes('aman'));

console.log(gameName.split('-'));
