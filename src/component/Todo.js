import React,{useState,useEffect} from 'react'

function Todo()
{
   const [userInp,setInp]=useState('')
   const [todo,setTodo]=useState(["Todo List"])
   const [flag,setFlag]=useState(false)
   function addTodo(e){
       e.preventDefault()
       setTodo(arr=>[...arr,userInp])
   }
   function changeFlag(e)
   {
       e.preventDefault()
       flag?setFlag(false):setFlag(true)
   }
   return(
       <>
           <p>ReactJs Final Logical Test Solution</p>
           <input type="text" onChange={(e)=>{setInp(e.target.value)}}></input>
           <button onClick={(e)=>{addTodo(e)}}>Add Todo</button><br></br>
           <button onClick={(e)=>{changeFlag(e)}}>Display Todo</button>
           {
               flag?todo.map((items)=>{
                   return(
                       <div>{items}</div>
                   )
               }):<div></div>
           }
       </>
   )

}
export default Todo