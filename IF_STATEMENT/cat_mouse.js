var userInput = require('readline-sync');
var cat1 = userInput.question("enter num... of cat1 ");
var cat2 = userInput.question("enter num... of cat2 ");
var mouse = userInput.question("enter num... of mouse ");
var dis = 0;
var dis2 = 0;
if (cat1 > mouse){
    dis = cat1 - mouse
}if(mouse > cat1){
    dis = mouse - cat1
}if(cat2 > mouse){
    dis2 = cat2 - mouse
}if(mouse > cat2){
    dis2 = mouse - cat2
}

if(dis > dis2){
    console.log('cat2');
}else if(dis2 > dis){
    console.log("cat1");
}else{
    console.log("mouse");
}


