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
function getTheTimeNow (timeToAdd)
{
   return  new Promise ((resolve,reject )=>{setTimeout(()=>{
      let dateNow= new Date();
      resolve(`print after ${timeToAdd/1000} seconds-->${dateNow}`);

   },timeToAdd);
});
};

  async function printResult(time)
{
   const timeToAdd=time*1000;
   await getTheTimeNow(timeToAdd)
   .then((result)=>
   {
      console.log(result);
   })
   //console.log(result);
};
var functionArray=
[
  { fn: printResult,para: 1},
  { fn: printResult,para: 2},
  { fn:printafter2sec,para:'hieeeee!!'},
  { fn: printResult,para: 3},
  { fn: printResult,para: 4}

];
  async  function executeArray(funAry) 
   {
      
   for(let i in funAry)
   {
    await  funAry[i].fn(funAry[i].para);
   }
   
   }
executeArray(functionArray);