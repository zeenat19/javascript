var readlineSync = require('readline-sync');
var chance = parseInt(readlineSync.question("How many chanches you want to take ?  "));  

var hideNum = (Math.floor(Math.random()*10));
// var hideNum = 4;
var index = 0;
let count = 0;
while(index < chance){
    var readlineSync = require('readline-sync');
    var guessYourNum = parseInt(readlineSync.question("Enter your choice number "));
    if(guessYourNum==hideNum){
        console.log("You won!");
        break;
    }else{
        index++;
        count++;
    }  
}
if (count==chance){
    console.log("Sorry you lost the chance :(  number was",hideNum);
}