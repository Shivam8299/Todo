'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

    

export default function AddTopic () {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter()
    const handleSumbit = async(e)=>{
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:3000/api/tasks',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({title,description})
            })
            if(res.ok){
                router.push("/")
            }
            else{
                throw new Error("failed to add task")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSumbit} className="flex flex-col gap-3" >
            <input className="border border-slate-500 px-6 py-3 " 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            type="text" 
            required
            placeholder="Task Title " />

            <input className="border border-slate-500 px-6 py-3 " 
            type="text" 
            required
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            placeholder="Description" />

            <button type="submit" className="bg-green-600  text-white py-3 px-6 w-fit m-auto md:m-0 font-semi-bold  ">Add Task</button>
        </form>
    )
}