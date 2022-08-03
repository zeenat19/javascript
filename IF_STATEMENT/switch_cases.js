
// var day = 8;
// switch(day){
//     case 0:
//         console.log('monday');
//     break;
//     case 1:
//         console.log('tuesday');
//     break;
//     case 2:
//         console.log('wednesday');
//     break;
//     case 3:
//         console.log('thurday');
//     break;
//     case 4:
//         console.log('friday');
//     break;

//     case 5:
//         console.log('saturday');
//     break;

//     case 6:
//         console.log('sunday');
//     break;
//     default :
//         console.log("hello ji");
// }






// var readline = require("readline-sync");
// var day = Number(readline.question("enter a day number "));
// switch(day){
//     case 0: case 1: case 2:
//         console.log('monday');
//     break;
    
//     case 3:
//         console.log('thurday');
//     break;
//     case 4:
//         console.log('friday');
//     break;

//     case 5:
//         console.log('saturday');
//     break;

//     case 6:
//         console.log('sunday');
//     break;
//     default :
//         console.log("hello ji");
// }





let readline = require("readline-sync");
let num = readline.questionInt("enter any number for comparision ");
switch(true){
    case(num>5 && num<10 && num>0):
        console.log("5 se bada h or 10 se choota h");
        break;
    case(num>10 && num <15):
        console.log("10 se bada h or 15 se chhota h ");
        break;
    default :
        console.log("bhut bda h ");
}