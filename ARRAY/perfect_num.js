// let userInput = requeire('readline-sync');
// let perfect = userInput.question("enter any number ");
let sum = 0;
var num=28
for(var i=1; i<num; i++){
    if(num%i==0){
        sum = sum + i;
    }
}
if(sum == num){
    console.log('It is perfect number');
}else{
    console.log("It is not perect number");
}






