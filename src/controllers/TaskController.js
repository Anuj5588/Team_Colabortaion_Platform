import { get } from "mongoose"
import { createTask, getTask ,getSingleTask,deleteTask} from "../services/TaskService.js"
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
                Success:"task founded",
                allTask
            })
         }



    }catch(err){
        console.log(err)
    }

}

async getSinleTask(req,res){


    try{
     const {id} = req.params

     const singleTask = await getSingleTask(id)
     if(singleTask){

        return res.json({ singleTask
        })

     }
    }catch(err){

        res.json(err)

    }

}


async deleteSingleTask(req,res){
      try{
     const {id} = req.params
     const deleteSingleTask= await deleteTask(id)
      if (!deleteSingleTask) {
      return res.status(404).json({
        message: "Task not found"
      });
    }
     if(deleteSingleTask){
        return res.json({ Success:"task deleted"
        })

     }
    }catch(err){

        res.json(err)

    }

}

}

export default new TaskController()

