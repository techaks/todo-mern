import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();


const dbConnect = async()=>{

    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("DATABASE Connected")


    } catch (error) {
        console.log(error)
        
    }
}
export default dbConnect;