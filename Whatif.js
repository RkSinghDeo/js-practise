const getTheTimeNow = (timeToAdd)=>
{
   return( setTimeout(() => {
      let dateNow = new Date();
      try {
         console.log(`Printing after ${timeToAdd/1000} seconds-->${dateNow}`)
         
      } catch (error) {
         alert('there is an error!!');
         
      } }, timeToAdd))
}
async function printResult(time)
{
   const timeToAdd=time*1000;
   await getTheTimeNow(timeToAdd);
   //console.log(result);
}

async function simplyPrintWhateverIsPassedAfterPassesTime(message)
{
   const timeToAdd=2000;
   await getTheTimeNow(timeToAdd);
   console.log(message);
   //console.log(result);
}

var functionArray=
[
  { fn: printResult,para: 1},
  { fn: printResult,para: 2},
  { fn: simplyPrintWhateverIsPassedAfterPassesTime, para: 'Dummy Message'},
  { fn: printResult,para: 3},
  { fn: printResult,para: 4},
  
]
// how to write now. 
function executeArray(funAry) 
{
   let stime=0;
   funAry[0].fn(funAry[0].para);
for(let i=1;i<4;i++)
{  stime=stime+funAry[i-1].para*1000;
   setTimeout(() => {
      funAry[i].fn(funAry[i].para);
   }, stime);
}
}
executeArray(functionArray);
