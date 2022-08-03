// function f1(name, callback){
//     callback();
//     console.log('Hello',name);
// }
// function f2(){
//     console.log("bye...");
// }
// f1('Rinki', f2);

//Output = bye...
//Hello Rinki





// function f1(sername, callback){
//     callback('Rinki'+" "+sername)
// }
// function f2(name){
//     console.log(name);
// }
// f1('Kumari', f2);

//Output = Rinki kumari






function f1(){
    console.log(2);
    // f3();
}
function f2(){
    console.log(4);
}
function f3(){
    console.log(3);

    // f2();
}
function f4(callback){
    console.log(1);
    callback();
    
}

f4(f1);





