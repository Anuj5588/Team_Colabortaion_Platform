import { get } from "mongoose"
import { createTask, getTask } from "../services/TaskService.js"
class TaskController  {

  async   createTask(req,res){
        
        const {title, description, status, priority}= req.body
        const userId = req.params.id

        try{  const createByUserTask = await createTask({title, description, status, priority,createdBy:userId})

        if(!createByUserTask){
            return res.status(400).json({
                Error:"task not created"
            })
        }else{
              return res.status(200).json({
                createByUserTask

        })


    }}catch(err){
            console.log(err)
        }

      

}

 getAllTask(req,res){

    try{
         const id = req.params

         const allTask = getTask({id})
         if(!allTask){
            return res.status(400).json({
                Error:"task not found"
            })
         }else{
            return res.status(200).json({
                Success:"task founded"
            })
         }



    }catch(err){
        console.log(err)
    }

}

}

export default new TaskController()

