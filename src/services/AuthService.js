import User from "../models/User.js";




export const createUser = async (name,email,password)=>{
const user = User.create({name,email,password})
return user

}

export const findUser = async (email)=>{

  const user = User.findOne({email})

  return user

}