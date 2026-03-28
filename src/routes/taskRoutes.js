import express from 'express'
import taskController from '../controllers/TaskController.js'
import { jwtMiddleWare } from '../middleware/authMiddleware.js'


const router = express.Router()

router.post('/create-task',jwtMiddleWare,taskController.createTask)



export default router