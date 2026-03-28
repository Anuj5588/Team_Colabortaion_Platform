import Task from "../models/Task.js";

export const   createTask= async (title, description, status, priority,user)=>{

    const task = await Task.create({title, description, status, priority,user})

    return task


}