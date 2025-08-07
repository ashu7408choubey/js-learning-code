const accountId = 1111
let accountEmail = "ayush@gmail.com"
var accountPass = "1234"
accountCity = "GKP"

let accountState;
// accountId = 1112  // Not Allowed

console.log(accountId); 


accountEmail = "aman@gmail.com"
accountPass = "12345"
accountCity = "CG"


/*
 Prefer not to use var
 Because of issue in block scope and functional scope due value repetation means if name same it change it .
*/


console.table([accountEmail, accountPass, accountCity, accountState])