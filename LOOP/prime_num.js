// var readlineSync = require('readline-sync');
// var userInput = parseInt(readlineSync.question("Enter your number "));
var a = 1;
while (a < 31){
    var b = 2;
    while(b<a){
       if (a%b==0){
           break;
       } else{
           console.log(a);
           break;
       }
       b++;
    }
    a++;
}

