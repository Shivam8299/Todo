import EditTopic from "@/components/EditTopic";

const getTaskById = async(id)=>{
    try {
       const res = await fetch(`http://localhost:3000/api/tasks/${id}`,{
        cache:"no-store"
       }) 
       if(!res.ok){
        throw new Error("faild to fetch");
       }
       return res.json()

    } catch (error) {
        console.log(error)
    }
}
export default async function update({ params }) {
    const { id } =  await params;
    const { task } = await getTaskById(id);
    const { title, description } = task;
    return <EditTopic id={id} title={title} description={description} />;
  }