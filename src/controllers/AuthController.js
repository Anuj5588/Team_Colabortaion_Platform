
import jwt from 'jsonwebtoken'
import User from '../models/User.js';

import { createUser,findUser } from './../services/AuthService.js';

class AuthController{
    async register(req,res){
        try{
            const {name, email,password}=req.body
           const checkUser = findUser({email})
           if(checkUser){
            return res.status(401).json({
                Error:"User already exist"
            })
           }
            const user = createUser(name,email,password)
             return res.status(201).json({
        success: true,
        user
      });
    }catch(err){
        console.log(err)

    }
}

async login(req,res){
const {email} =req.body
    const user = await User.findOne({email})
  console.log(user)
      const token = jwt.sign({id:user._id, email },"hello" )

     if(!token){
        res.status(404).json({
            Error:"User Not forund plz use valid email"
        })
        }else{
            res.status(201).json({
              token  
                
            })
     }
}

async profile(req,res){
    res.status(200).json({success:"token is verify"})
}
     }


export default new AuthController()