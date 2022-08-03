var list = ['paper', 'scissors', 'rock'];


var readlineSync = require('readline-sync');
var userInput = (readlineSync.question("Tell me your choice "));

var first = (Math.floor(Math.random()*list.length));
first = list[first];

console.log(first,userInput);

if(first == 'paper' && userInput == 'rock'){
    console.log("paper win!");
}else if(first == 'rock' && userInput == 'paper'){
    console.log('paper win!');
}else if(first == 'scissors' && userInput == 'paper'){
    console.log("scissors winner!");
}else if (first == 'paper' && userInput == 'scissors'){
    console.log('scissors winner!');
}else if(first == 'rock' && userInput == 'scissors'){
    console.log('rock win!');
}else if(first == userInput){
    console.log("Try Again");
}else{
    console.log('rock won :)');
}


