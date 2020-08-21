function getTheTimeNow (timeToAdd)
{
   return  new Promise ((resolve,reject )=>{setTimeout(()=>{
      let dateNow= new Date();
      resolve(`print after ${timeToAdd/1000} seconds-->${dateNow}`);

   },timeToAdd);
});
};

function printResult(time)
{
   const timeToAdd=time*1000;
   getTheTimeNow(timeToAdd)
   .then((result)=>
   {
      console.log(result);
   })
};
var functionArray=
[
  { fn: printResult,para: 1},
  { fn: printResult,para: 2},
  { fn: printResult,para: 3},
  { fn: printResult,para: 4}

];
function executeArray(funAry) 
{  var j=0,stime=0;
   funAry[0].fn(funAry[0].para);
for(let i=1;i<4;i++)
{  
   stime=stime + funAry[i-1].para*1000;
   //console.log(stime);
   
   setTimeout (()=> {
      funAry[i].fn(funAry[i].para);
   }, stime);
   
}
}
executeArray(functionArray);