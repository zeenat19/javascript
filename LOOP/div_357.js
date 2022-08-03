// for(var a = 1; a<15; a++){
//     if (a%7==0){
//         if(a%3==0){
//             console.log('Navgurukul');
//         }else{
//             console.log('gurukul');
//         }
//     }else if(a%3==0){
//         console.log('Nav');
//     }
// }



var a = 0;
do{
    if (a%7==0){
        if(a%3==0){
            console.log('Navgurukul');
        }else{
            console.log('gurukul');
        }
    }else if(a%3==0){
        console.log('Nav');
    }
    a++;
}
while(a<=15);