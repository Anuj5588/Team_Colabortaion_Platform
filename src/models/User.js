import mongoose from 'mongoose'

const {Schema} = mongoose;

const user = new Schema({
    name:{type:String,},
    lastName:{type:String},
      email:{type:String},
    mobileNumber:{type:String,},
    age:{type:Number,},
    dateOfBirth:{type:Number,},
  

})
export default mongoose.model("User", user);