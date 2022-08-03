var num = 0;
let sum = 0;
var readlineSync = require('readline-sync');
var userInput = parseInt(readlineSync.question("Enter your number "));
while(num < userInput){
    var user = parseInt(readlineSync.question("any number "));
    sum = sum + user;
    num++;
}
console.log(sum);








// for (var i = 0; i<3; i++){
//     setTimeout(()=> console.log(i),1);
// }

// for (let i = 0; i < 3; i++){
//     setTimeout(() =>console.log(i) ,1)
// }


