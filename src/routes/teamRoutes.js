import express from 'express'
import { jwtMiddleWare } from '../middleware/authMiddleware.js'
import TeamController from '../controllers/teamController.js'

const router = express.Router()

router.get('/create-team', jwtMiddleWare, TeamController.createTeam)
router.put('/:teamId/addMembers', jwtMiddleWare, TeamController.addMembers)




export default router