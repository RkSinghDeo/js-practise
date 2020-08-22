function getTheTimeNow (timeToAdd)
{
   return  new Promise ((resolve,reject)=>{setTimeout(()=>{
      let dateNow= new Date();
      resolve(`print after ${timeToAdd/1000} seconds-->${dateNow}`);

   },timeToAdd);
});
};
 
 function printResult(time)
{
   const timeToAdd=time*1000;
   return getTheTimeNow(timeToAdd);
};
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
var functionArray=
[
  { fn: printResult,para: 1},
  { fn: printResult,para: 2},
  { fn: printafter2sec,para:'hieeeee!!'},
  { fn: printResult,para: 3},
  { fn: printResult,para: 4}

];
let i=0;
   function executeArray(funAry) 
    
    {
        try
        {
    funAry[i].fn(funAry[i].para).then((result)=>{

    console.log(result);
    if(i<5)
    {
        i++;
    }
    executeArray(functionArray);
    }
    )
}catch{
    alert('fuction is over !!');
}
} 
   executeArray(functionArray);