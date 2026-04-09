import express from 'express'
import taskController from '../controllers/TaskController.js'
import { jwtMiddleWare } from '../middleware/authMiddleware.js'


const router = express.Router()

router.post('/create-task/:id',jwtMiddleWare,taskController.createTask)
router.get('/get-all-task/:id', jwtMiddleWare, taskController.getAllTask )
router.get('/get-single-task/:id', taskController.getSinleTask )



export default router