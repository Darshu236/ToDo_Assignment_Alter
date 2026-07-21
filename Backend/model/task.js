import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
{
        title:{
            type:String,
            required: true,
            trim: true
        },
        tags:{
            type: String,
            required: true,
            enum:["healthy", "time-sensistive","important"],
            default:"time-sensistive"
        },
        status:{
            type:"String",
            enum:["pending", "completed"],
            default: "pending"
        },
        total_task:{
            type:Number    
        }
    }
);

const Task = mongoose.model("Task", taskSchema)
export default Task