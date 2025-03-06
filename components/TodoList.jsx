import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
import {HiPencilAlt} from "react-icons/hi"

const getTask = async()=>{
  try {
   const res =  await fetch("http://localhost:3000/api/tasks",{
      cache:"no-store"
    })
    
    if(!res.ok){
      throw new Error("Failed to fetch topics")
    }
   return res.json()
    
  } catch (error) {
    console.log("error loading tasks",error)
  }
}

export default async function TodoList() {
  const data = await getTask()
  let taskData = data.task
  return (
    <>
    {taskData.map((t) =>(
      <div  key={t._id} className="p-4 flex justify-between border border-slate-300 my-3 gap-5 shadow items-start">
      <div>
          <p className="font-bold text-2xl text-gray-600 font-serif ">{t.title}</p>
          <div className="text-lg mt-1">{t.description}</div>
      </div>
      <div className="flex gap-2">
          <RemoveBtn id={t._id}/>
          <Link href={`/update/${t._id}`}><HiPencilAlt size={24}/></Link>
      </div>
    </div>
    ))}
    </>
  )
}





