var arr = [1,2,4,5,6,8];
var i = 0;

while(i < arr.length){
    if(i+1 == arr[i]){
        console.log(arr[i]);
    }else{
        console.log("nhi h ",arr[i]);
    }
   i++; 
}






// array = [1,2,3,4,6,7,8,9,10]
// a = 1
// while a<=10:
//     if a not in array:
//         print(a)
//     a=a+1



// MAX NUM OF THREE VAR

// var a = 50;
// var b = 10;
// var c = 30;
// if (a>b && a>c){
//     console.log('A is highest=',a);
// }else if(b>a && b>c){
//     console.log("b is highest = " + b);
// }else{
//     console.log("c = "+c);
// }


// WITHOUT USING AND OPRATER
// var a = 56;
// var b = 10;
// var c = 4;
// if (a>b){
//     if(a>c){
//         console.log('A is highest=',a);
//     }else {
//         console.log(c);
//     }
// }else if(b>a){
//     if(b>c){
//         console.log("b is highest = " + b);
//     }else{
//         console.log(c);
//     } 
// }else{
//     console.log("c = "+c);
// }



// CALLCULATOR FUNCTION

// function addSum(sign, a, b){
//     if (sign=='+'){
//         console.log(a+b);
//     }else if(sign=='-'){
//         console.log(a-b);
//     }else if(sign == '*'){
//         console.log(a*b);
//     }else if(sign == '%'){
//         console.log(a%b);
//     }else{
//         console.log('nothing');
//     }
// }
// addSum('+',5,7);



// var myArr = [ 2, 3, 4, 5, 6];
// var total = 0;
// for(var a=0; a < myArr.length; a++){
//   total = total + myArr[a]
// // console.log();
  
// }
// console.log(total);



// SECOND MAX 

// var x = 45;
// var y = 270;
// var z = 37;
// if (x>y && x<z){
//     console.log(x);
// }else if(y>z && y<x){
//     console.log(y);
// }else if(x>z && x<y){
//     console.log(x);
// }else if(y>x && y<z){
//     console.log(y);
// }else{
//     console.log(z);
// }


// RECERSION

// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }