import User from "../models/User.js";
import { hashPassword } from "../config/bcrypt.js";
 const saltRounds = 10;






export const createUser = async ({name,email,password})=>{

const bcryptPassword = await hashPassword(password, saltRounds)


const user = await User.create({name,email, password: bcryptPassword })
return user

}

export const findUser = async (email)=>{

  const user = User.findOne({email})

  return user

}