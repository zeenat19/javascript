var readlineSync = require('readline-sync');
var userInput = parseInt(readlineSync.question("Enter your number "));
var num = 0;
let count = 0;

// while (num<=userInput){
//     if (userInput%num==0){
//         count = count+1;
//     }
//     num++;
// }
// if(count==2){
//     console.log('Prime');
// }else{
//     console.log("not prime");
// }





// do{
//     if (userInput%num==0){
//         count = count+1;
//     }
//     num++;
// }
// while (num<=userInput)
// if(count==2){
//     console.log('Prime');
// }else{
//     console.log("not prime");
// }






for(var num=0; num<=userInput; num++){
    if (userInput%num==0){
        count = count+1;
    }
}
if(count==2){
    console.log('Prime');
}else{
    console.log("not prime");
}
