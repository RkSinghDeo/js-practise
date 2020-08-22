function getTheTimeNow (timeToAdd)
{
   return  new Promise ((resolve,reject )=>{setTimeout(()=>{
      let dateNow= new Date();
      resolve(`print after ${timeToAdd/1000} seconds-->${dateNow}`);

   },timeToAdd);
});
};
async function printmsg(msg)
{
   let timetoadd = 2000;
   await getTheTimeNow(timetoadd);
   console.log(msg);
}
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
  { fn:printmsg,para:'hieeeee!!'},
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