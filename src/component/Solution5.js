import React,{useState} from 'react'
var obj = [
    {
        "id":4,
        "name":"abc4"
    },
    {
        "id":2,
        "name":"abc2"
    },
    {
        "id":1,
        "name":"abc1"
    },
    {
        "id":3,
        "name":"abc3"
    }
]
var obj1= JSON.parse( JSON.stringify( obj ) );
function Solution5()
{
    const [sortFlag,setSortFlag]=useState(false)
    
     function sortObject(e)
     {
       e.preventDefault()
       obj.sort((a, b) => a.id > b.id? 1:-1)
       setSortFlag(!sortFlag)
     }  
    return(
        <>
         <div className="container">
          <div>
          <p>Object Before Sort</p>
              {
                 obj1.map((items)=>{
                     return(
                         <div>
                            <p>id : {items.id} , Name : {items.name}</p>
                         </div>
                     )
                 })
              }
          </div>
          <button onClick={sortObject}>Sort Object</button>
          { 
            sortFlag?<div><p>object after sort</p>{obj.map((items)=>{
                     return(
                         <div>
                            <p>id : {items.id} , Name : {items.name}</p>
                         </div>
                     )
                 })}</div>:<></>
          }
          </div>
        </>
    )
}

export default Solution5