
function getTheTimeNow (timeToAdd)
{
   return  new Promise ((resolve,reject)=>{setTimeout(()=>{
      let dateNow= new Date();
      resolve(`print after ${timeToAdd/1000} seconds-->${dateNow}`);

   },timeToAdd);
});
};
 function printmsg(msg)
{;
   let timetoadd = 2000;
   getTheTimeNow(timetoadd);
    massage=new Promise((resolve,reject)=>
   {
   resolve(msg);
   })
   return massage;
}
 function printResult(time)
{
   const timeToAdd=time*1000;
   return getTheTimeNow(timeToAdd);
};

var functionArray=
[
  { fn: printResult,para: 1},
  { fn: printResult,para: 2},
  { fn:printmsg,para:'hieeeee!!'},
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