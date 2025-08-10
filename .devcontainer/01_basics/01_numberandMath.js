const score = 400;
//console.log(score);


const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNum = 23.876;
//console.log(otherNum.toPrecision(2));

const hund = 1000000;
//console.log(hund.toLocaleString('en-IN'));

// ******************** Maths *************************


// console.log(Math);

// console.log(Math.abs(-8));

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4, 3, 6, 7));
// console.log(Math.max(2, 3, 6, 8));

console.log(Math.random());// It gives the value b/w 0 & 1;

console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);// for avoiding the zero for the floor value we add 1;


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/*
for the need of min value atleast we have added the min to the last.
*/
