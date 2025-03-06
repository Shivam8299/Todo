import Link from "next/link"
function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800  px-4 py-3 ">
        <Link className="font-bold text-white" href={'/'} >Task Manager</Link>
        <Link className="py-2 px-4 shadow-md bg-white" href={'/addTopic'} >Add New</Link>
    </nav>
  )
}

export default Navbar