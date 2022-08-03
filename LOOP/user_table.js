var readlineSync = require('readline-sync');
var tabNum = parseInt(readlineSync.question("In which table your want? "));
for (var count=1; count<=10; count++){
    console.log(tabNum*count);
}