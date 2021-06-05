import React,{useState,useEffect} from 'react'

function Solution2()
{
  let arr=[0,0,1,1,0,0,0,1,0,0,1,1,1,0]
  const [countOnes,setCountOnes]=useState(0)
  useEffect(()=>{
    var totalCount=0
    for(var i=0;i<arr.length;i++)
    {
      var count=1
      if(arr[i]==1)
      {
      for(var j=i+1;j<arr.length;j++)
      {
        if(arr[j]==1)
        {
          count++
        }else
        {
          break;
        }

      }
     }
     if(count>totalCount)
     {
       totalCount=count
     }
    }
  setCountOnes(totalCount)
  },[])
  return(
      <>
       <div className="container">
         <p>Arr is {arr}</p>
         {
           countOnes?<p>Max num of consecutive 1's is {countOnes}</p>:<></>
         }
        </div>
      </>
  )
}

export default Solution2