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
}
//this fuction takes a number(time in ms) as an input used as argument in setTimeout fuction and returns promise
function getTheTimeNow (timeToAdd)
{
   return  new Promise ((resolve,reject )=>{setTimeout(()=>{
      let dateNow= new Date();
      resolve(`print after ${timeToAdd/1000} seconds-->${dateNow}`);

   },timeToAdd);
});
};
//this async funcion takes number(time in sec which is attcualy not real seconds) turn them into logical argument for getTheTimeNow funtion 
//it prints the  resolved promise return from getTheTimeNow function
//it awaits until the promise is resolved before excuting next task

async function printResult(time)
{
   const timeToAdd=time*1000;
   await getTheTimeNow(timeToAdd)
   .then((result)=>
   {
      console.log(result);
   })
};
//this array contains the functions as its elemets along with there required arguments
var functionArray=
[
  { fn: printResult,para: 1},
  { fn: printResult,para: 2},
  { fn:printafter2sec,para:'hieeeee!!'},
  { fn: printResult,para: 3},
  { fn: printResult,para: 4}

];

//this async  function takes array as its argument
//it executes each element of array in series and makes the next element await until the first element is executed
// basically it changes a set of async funtions to execute as sync way even being asyc itself
//thinking : it calls the next element only if the promise of its prevoius element is resolved
//algorithm : it awaits for the promise to resolve then proceeds calling next element
  async  function executeArray(funAry) 
   {
      
   for(let i in funAry)
   {
    await  funAry[i].fn(funAry[i].para);
   }
   
   }
executeArray(functionArray);