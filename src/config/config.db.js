import mongoose from 'mongoose'
export const configdb =async ()=>{
  try {
  await mongoose.connect('mongodb://127.0.0.1:27017/team-colaboration');
  console.log("mongodb is connected")
} catch (error) {
 console.log(error)
}
}