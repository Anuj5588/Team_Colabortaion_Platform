import Task from "../models/Task.js";

export const   createTask= async (data)=>{
    console.log(data)

    const task = await Task.create(data)

    return task


}

export const  getTask = async (data)=>{

    const task = await Task.find({data})
    return task
}