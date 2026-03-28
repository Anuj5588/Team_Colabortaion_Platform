import { createTask } from "../services/TaskService.js"
class TaskController  {

    async createTask(req,res){
        
        const {title, description, status, priority}= req.body
        const userId = req.user._id

        try{  const createByUser = createTask({title, description, status, priority,createdBy:userId})

        if(!createByUser){
            return res.status(400).json({
                Error:"task not created"
            })
        }else{
              return res.status(200).json({
                Success:"task created"
        })


    }}catch(err){
            console.log(err)
        }

      

}
}

export default new TaskController()

