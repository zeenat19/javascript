var firstObj = {'a': 100, 'b': 200, 'c':300, 'd':40, 'e':400}
var secObj = {'a': 300, 'b': 700, 'd':400}
for(var i in firstObj){
    if(secObj.hasOwnProperty(i)){                    //It's check that value is exixts or not and value return in true & false.
        let num = firstObj[i] + secObj[i];
        firstObj[i] = num;
    }
}
console.log(firstObj);
