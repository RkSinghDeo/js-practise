//this fuction takes a number(time in ms) as an input used as argument in setTimeout fuction and returns promise
function getTheTimeNow (timeToAdd)
{
   return  new Promise ((resolve,reject)=>{setTimeout(()=>{ //defining new promise 
      let dateNow= new Date();//current date and time
      resolve(`print after ${timeToAdd/1000} seconds-->${dateNow}`)// statment to be return after being resolved

   },timeToAdd);
});
};
//this funcion takes number(time in sec which is attcualy not real seconds) turn them into logical argument for..
//getTheTimeNow funtion and returns promise

 function printResult(time)
{
   const timeToAdd=time*1000;//coversion to logical argument
   return getTheTimeNow(timeToAdd);//returning the result
};

//this funtion takes message as argument and just print msg after 2 seconds and returns promise
function printafter2sec(msg)
{
    return new Promise((resolve,reject)=>{
        const timeToAdd=2000;
         getTheTimeNow(timeToAdd)
        .then((result)=>{
            console.log(msg);
            resolve(true);

        })
    })

//this array contains the functions as its elemets along with there required arguments
var functionArray=
[
  { fn: printResult,para: 1},
  { fn: printResult,para: 2},
  { fn: printafter2sec,para:'hieeeee!!'},
  { fn: printResult,para: 3},
  { fn: printResult,para: 4}

];


//this function takes array as its argument and have 1 defaut argument as well
//it executes each element of array in series and makes the next element await until the first element is executed
// basically it changes a set of async funtions to execute as sync way
//thinking : it calls the next element only if the promise of its prevoius element is resolved
//algorithm : it calls back itself after the promise is resolved with updated defaut i argument
function executeArray(funAry=[],i=0) 
{      
    if(i<funAry.length)//condition to stop it after executing last element
        {
        funAry[i].fn(funAry[i].para).then((result)=>{
        console.log(result);
     executeArray(functionArray,++i);})
        }
}

 
   executeArray(functionArray);