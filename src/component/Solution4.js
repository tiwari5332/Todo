import React,{useEffect,useState} from 'react'

function Solution4()
{
    const [responce,setResp]=useState([])
    useEffect(()=>{
       fetch("https://my-json-server.typicode.com/typicode/demo/posts").then((resp)=>{
           resp.json().then((result)=>{
               setResp(result)
           })
       })
    },[])
    return(
        <>
        <div className="container">
          <p>Api Call result</p>
         <div>
            {
                responce?responce.map((items)=>{
                    return(
                        <div>
                           <p>Id = {items.id} , Title = {items.title}</p>
                        </div>
                    )
                }):<></>
            }
            </div>
        </div>
        </>
    )
}

export default Solution4