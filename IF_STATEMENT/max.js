var user = require('readline-sync');
var max = 0;
for(var i = 0; i<5; i++){ 
    var input = parseInt(user.question("any num..."));
    if(max<input){
        max=input;
    }
}
console.log(max);





// var list = [44,6,7,3,53,6,33,6,22,45];
// let max = list[0];
// for(var i=1; i<list.length; i++){
//     if(max<list[i]){
//         max=list[i];
//     }
// }
// console.log(max);






 