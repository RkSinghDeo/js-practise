//random functions

function sum(a=2,b=3) {
     console.log(a+b);
}

 function sub(a=3,b=2){
    console.log(a-b);
 }

 function multiply(a=2,b=3) {
    console.log(a*b);
 }

var functionArray;//objects of all funtions stored here
function functionToarray(func) {
    functionArray=[];
    let ele= new func();
    functionArray.push(ele);//pushing elemnts series wise
    //runing all the funtions
    console.log( functionArray.forEach(el => { console.log(ele);}));
}
functionToarray(sum);
functionToarray(sub);
functionToarray(multiply);

 