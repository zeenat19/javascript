var que_list = ['What is capital of Bihar ? ', 'In navgurukul, what we are learning ? ', 'Who is Prime minister of India ? ', 'Who is President of America ? ','What is computer ? '];
var opt_list = [['Delhi', 'Patana','Padhji', 'Varansi'], ['Softweer Engineering', 'Singing', 'Dancing', 'Actoring'], ['Arvind Kejariwal', 'Sonia ghandhi', 'Nrendra modi', 'Manmohan singh'], ['Joe Biden', 'Donal trump', 'Kamla devi', 'Rinki kumari'], ['Game', 'Thinkpad', 'laptop', 'Electronic machine']];
var ans_list = [2,1,3,1,4];
var opt50_list = [['Delhi', 'Patna'], ['Softweer Engineering', 'Singing'], ['Narendra modi','Arvind kejrival'], ['Joe Biden', 'Donal trump'], ['game','Electronic machine']];
var ans50_list = [2,1,1,1,2];
var userInput = require("readline-sync");
let count = 1;
let wrong_ans_count = 0;



function kbc_game(){
    console.log("Welcome to join the our KBC game with our team :) ", ("\n"));

    //This loop for getting questions
    for(var i=0; i<que_list.length; i++){
        console.log("Que no." + (i+1)+ " " + que_list[i]);
        console.log("Your options are there.......... ");

        options(i);
        
        var getLifeline = userInput.question("DO you want to take any help ?. If yess so enter yess or no...");
        if(getLifeline=='no'){
    
            var ansInput = userInput.questionInt('Choose your correct choice of this question ');
            if(ansInput>0 && ansInput<5){
                if(ansInput==ans_list[i]){
                    console.log('Congrs :) ',("\n"));
                }else{
                    wrong_ans_count ++;
                    if(wrong_ans_count==1){
                        console.log("Sadly Your answer is incorrect :( ", ("\n"));
                    }else{
                        console.log("SOrry I can't give you more chance ")
                        break;
                    }
                }   
            } else{
                console.log("You have to select you answer between 1 to 4 only", ("\n"));
            }
        }else{
            
            if(count==1){
                lifeLine50(i);
              
                let lifeline5050 = userInput.questionInt("enter your answer between 1 to 2 ");
                if(lifeline5050==ans50_list[i]){
                    console.log("Wow congres...", "\n");
                    count++;
                }else{
                    console.log("Sorry this chance you lost :(");
                    break;
                }
            }else{
                console.log("Sorry you can't take again help because you have used your 5050 lifeline ...", '\n');
                // again50(i);
               
            
            var ansInput = userInput.questionInt('Choose your correct option of this question ');
            if(ansInput>0 && ansInput<5){
                if(ansInput==ans_list[i]){
                    console.log('Congrs... :) ',("\n"));
                }else{
                    console.log("Sadly Your answer is incorrect and you are disqualified :( ", ("\n"));
                    break;
                }   
            } else{
                console.log("You have to select you answer between 1 to 4 only", ("\n"));
               
            }
        }      
            
        }
    }
    var againPlay = userInput.question("Do you want to play again ?...... YES or NOT ");
    if(againPlay=='yes'){
        count = 1;
        kbc_game();
    }else{
        console.log("Okay byee.....");
    }
}
// kbc_game();

function num(){
    kbc_game();
}
num();


function options(i){
    for(var j=0; j<opt_list[i].length; j++){
        console.log((j+1) + " " + opt_list[i][j]);
    }
    console.log(" ");
}



function lifeLine50(i){
    for(var twoOpt=0; twoOpt<opt50_list[i].length; twoOpt++){
        console.log((twoOpt+1)+(" ") + opt50_list[i][twoOpt]);
    }
}



// function again50(i){
//     for(var j=0; j<opt_list[i].length; j++){
//         console.log((j+1) + " " + opt_list[i][j]);
//     }
//     console.log(" ");
// }