var mainStr = "My name is rinki and I am is doing coding that is good.";
var subStr = 'is';
let sep = (mainStr.split(' '));
// console.log(sep.length);
let count = 0;
for (var i=0; i<sep.length; i++){
    if (sep[i]==subStr){
        count = count+1;
    }
}
console.log(count);