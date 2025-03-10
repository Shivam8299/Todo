"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

function EditTopic({id, title, description}) {
  const router = useRouter()
  const [newTitle,setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description)
  const handleSumbit = async (e)=>{
    e.preventDefault()
    try {
      const res =  await fetch(`http://localhost:3000/api/tasks/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({newTitle,newDescription})
    })
    if(!res.ok){
      throw new Error("faild to fetch");
     }
    router.push('/')
    } catch (error) {
      
    }
  }
  return (
    <form onSubmit={handleSumbit} className="flex flex-col gap-3" >
        <input className="border border-slate-500 px-6 py-3 " 
        onChange={(e)=>setNewTitle(e.target.value)}
        value={newTitle}
        type="text" 
        required
        placeholder="Task Title " />

        <input className="border border-slate-500 px-6 py-3 " 
        type="text" 
        onChange={(e)=>setNewDescription(e.target.value)}
        value={newDescription}
        placeholder="Description" />

        <button type="submit" className="bg-green-600  text-white py-3 px-6 w-fit m-auto md:m-0 font-semi-bold cursor-pointer  ">Update task</button>
    </form>
)

    
  
}

export  {EditTopic}