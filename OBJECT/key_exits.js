var stuName = {'name':'rinki', 'age':'19', 'id':'106048'};
var readline = require("readline-sync");
var addKey = readline.question("enter the your key name...");
// let count = 0;
for (var i in stuName){
    if(i != addKey){
        let addValue = readline.question("enter the your value of this key..");
        stuName[addKey] = addValue;
        // break;
    }else{
        console.log("This key already has exits in this object ");
    }

    // console.log(i);
    break;
}
console.log(stuName);