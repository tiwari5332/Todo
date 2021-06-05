import React,{useEffect,useState} from 'react'

function Solution3()
{
    let arr=[1,2,3,4,5,6,7,8,9,9,10,11]
    const [dup,setDup]=useState('')
    useEffect(()=>{
        var duplEle=0
        arr.map((items,index)=>{
            arr.map((items1,index1)=>{
                if(index1>index)
                {
                    if(items1==items)
                        duplEle=items
                }
            })
        })
        setDup(duplEle)
    },[])
    return(
        <>
        <div className="container">
        <p>Arr is : {arr}</p>
          {
              dup?<p>Duplicate item is {dup} in the above array</p>:<></>
          }
        </div>
         
        </>
    )
}

export default Solution3