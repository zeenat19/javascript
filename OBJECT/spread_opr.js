var arr1 = [4,5,6,8];
var arr2 = [6,8,3,5,7,8,2];
var arr3 = [...arr1,'a',...arr2,'b','c','d'];
console.log(arr3);



var obj = {'name':'rinki','age':20};
var obj2 = {'mob':234567, 'id':'nothing','add':'delhi'};
const obj3 = {...obj,b:'23',...obj2,c:'abe yrr'};
console.log(obj3);