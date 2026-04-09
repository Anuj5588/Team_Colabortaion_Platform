import Task from "../models/Task.js";

export const   createTask= async (data)=>{
    const task = await Task.create(data)
    return task
}

export const  getTask = async (data)=>{
    const task = await Task.find({data})
    return task
}

export const  getSingleTask = async (data)=>{
    console.log(data)
    const task = await Task.findById(data)
    return task
}

export const  UpdateTask = async (data)=>{
    const task = await Task.findByIdAndUpdate({data})
    return task
}

export const  deleteTask = async (data)=>{
    const task = await Task.findOneAndDelete({data})
    return task
}
 
export const  updateTaskStatus = async (data)=>{
    const task = await Task.findOneAndUpdate({data})
    return task
}

export const  assignTask = async (data)=>{
    const task = await Task(data)
    return task
}



