import Task from "../Model/Task";
import User from "../Model/User";


export const CreateTask = async (req,res)=>{
    try {
        const {title,description, priority,status} = req.body;

        if(!title || !description   || !priority || !status){
            return res.status(400).json({
                message:"all fields are required",
                success:false,
            })
            
        }

        const task = await Task.create({title,description,priority,status});

        
        const userId = req.id;

        const user = await User.findById(userId);

        user.tasks.push(task._id);
        await user.save();





        return res.status(200).json({
                message:"Task created",
                success:true,
            })

        
    } catch (error) {
         console.log(error);
        return res.status(400).json({
           
                message:"server error",
                success:false,
            })
        
    }



}


export const EditTask = async (req,res)=>{
    try {
        const {taskId} = req.params;
        const {title,description, priority,status} = req.body;

        if(!title || !description   || !priority || !status){
            return res.status(400).json({
                message:"all fields are required",
                success:false,
            })
            
        }

        await Task.findByIdAndUpdate(taskId,{title,description,priority,status})
        

     res.status(200).json({
            message:"Task updated",
            success:true
        })





    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"server error",
            success:false
        })
        
    }

}

export const Deletetask = async (req,res)=>{
    try {
        const {taskId} = req.params;

       await Task.findByIdAndDelete(taskId);



        res.status(400).json({
            message:"Task Deleted",
            success:true,
            
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"server error",
            success:false
        })
        
    }


}

export const GetTask = async(req,id)=>{

    try {
        const {taskId} = req.params;

       const task =  await findById(taskId)

        res.status(400).json({
            message:"got it",
            success:true,
            task
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"server error",
            success:false
        })
        
    }
}