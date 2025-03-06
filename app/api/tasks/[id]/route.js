import connectDB from "@/libs/mongoDb";
import Task from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT (request,{params}){
    try {
        const {id} =  params;
        const {newTitle:title, newDescription:description} = await request.json();
        await connectDB();
        await Task.findByIdAndUpdate(id,{title,description});
        return NextResponse.json({message:"Task Updated"}, {status:200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({message:" Error in Task Updating"}, {status:200})
        
    }
}

export async function GET(request,{params}){
    try {
        const {id}= params;
        await connectDB()
        const task = await Task.findOne({_id:id})
        return NextResponse.json({task},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"error in fetching task by Id"},{status:500})
    }
}