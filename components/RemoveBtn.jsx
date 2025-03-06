'use client'

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

function RemoveBtn({id}) {
  const router = useRouter()
  const removeTask = async()=>{
    try {
      const confirmed = confirm("Are you Sure?")
    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/tasks?id=${id}`,{
        method:"DELETE"
      })
     if(res.ok){
      router.refresh()
     }
    }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button onClick={removeTask} className="text-red-400 hover:text-red-600 cursor-pointer">
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveBtn