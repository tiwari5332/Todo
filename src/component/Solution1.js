import React from 'react'

function Solution1()
{
    let arr=[2,3,4,5,6,7,8,9]
    return(
        <>
        <div className="container">
          <p>ReactJs Logical Test Solution </p>
          <p>/**************Solution1**********/</p>
          <div>Arr is {arr}</div>
          <p>List of even items in arr</p>
          {
              arr.map((items)=>{
                  return(
                  (items%2)==0?<p>{items}</p>:<></>
                  )
              })
          }
          <p>/******End of Solution1**********/</p>
          </div>
        </>
        
    )
}

export default Solution1