import mongoose, { model, models } from "mongoose";


const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true,
        enum:["low","medium","high"],
        default:"low"
    },
    
    status:{
        type:String,
        required:true,
        enum:["toStart","inProgress","completed"],
        default:"toStart"
    }


},{timestamps:true});


const Task = models.Task || model("Task", taskSchema);
export default Task;

