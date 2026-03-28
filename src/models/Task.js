import mongoose from 'mongoose'

const {Schema} = mongoose;

const task = new Schema({
    title:{type:String, },
    discriotion:{type:String},

status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo"
  },

  priority: {
    type: String,
    enum: ["low", "medium", "high"]
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  dueDate: Date
}, { timestamps: true });

export default mongoose.model("Task", task)
