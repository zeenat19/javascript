// var stu = {'id':123,
//             'name':'rinki',
//             'age':18,
//             'mob':234546564
//         };

// var userInput = require('readline-sync');

// for (var i in stu){
//     if (i=='name'){
//         var userName = userInput.question("enter your any name ");
//         stu['name'] = userName;
//     }else if(i=='mob'){
//         var userMob = userInput.question("enter your mobile number "); 
//         stu['mob'] = userMob;
//     }
// }
// console.log(stu);



// console.log((function(num1) {
//     var userInput = require('readline-sync');
//     var num1 = parseInt(userInput.question("enter first number "));
//     // var num2 = parseInt(userInput.question('enter your second number'));
//     if(num1%2==0){
//         return "even num";
//     }else{
//         return "odd number";
//     }
// }) ());


function func(one, two, three) {
    var one = 4;
    var two = 10;
    var three = 6;
    var num = one+two+three
    return num;
}
console.log(func());