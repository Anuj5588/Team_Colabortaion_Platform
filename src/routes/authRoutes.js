import express from 'express'
import AuthController from '../controllers/AuthController.js';
import { jwtMiddleWare } from '../middleware/authMiddleware.js';

const router = express.Router();

// register Api


router.post('/register', AuthController.register)
router.get('/login', AuthController.login)
router.get ('/profile', jwtMiddleWare, AuthController.profile)


export default router