// var str = 'Rinki is a student';
// var data = str.split(' ');              //split is breaking in a part, which we will give inside the split from there it's break.
// console.log(data.length, data);




// var str = 'Rinki is a student';
// var data = str.split(' ',2);              //Here we are giving limitations like length should be come in two only. 
// console.log(data.length, data);





// let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
// let sentences = paragraph.split(/[!,?,.]/);                                              //Multiple split
// console.log(sentences);




let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let sentences = paragraph.split(/([!,?,.])/);                                    //This output will come differnce.
console.log(sentences);