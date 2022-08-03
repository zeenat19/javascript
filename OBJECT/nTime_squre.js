var user = require('readline-sync');
var nTime = parseInt(user.question('How many times you want to take user input ? '));

var obj = {};
for(let i=1; i<=nTime; i++){
    obj[i]= (i*i)
}
console.log(obj);