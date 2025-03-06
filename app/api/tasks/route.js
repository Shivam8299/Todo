import connectDB from "@/libs/mongoDb";
import Task from "@/models/topic";
import { NextResponse,nextUrl } from "next/server";

export async function POST(request) {  
    try {
        const { title, description } = await request.json();
        
        await connectDB(); 
        
        await Task.create({ title, description });

        return NextResponse.json({ message: "Task Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating task:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}


export async function GET(){
    try {
        await connectDB()
        const task =  await Task.find();
        return NextResponse.json({task})
    
    } catch (error) {
        console.error("Error fetching task:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB()
        await Task.findByIdAndDelete(id)
        return NextResponse.json({message:"task Delected"},{status:200})
    } catch (error) {
        console.error("error in deleting task:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}