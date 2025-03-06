import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

const Task = mongoose.model.Task || mongoose.model("Task", taskSchema);

export default Task