let n=require("readline-sync");
let choose_ascii=parseInt(n.question("enter number: "));
var ascii_char=97+choose_ascii
console.log(ascii_char)
for (var i=97;i<=ascii_char;i++) {
       console.log(chr(i),end="")         //Here chr(i) is not defind
}
