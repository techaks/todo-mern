
import User from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const preUser = await User.findOne({ email });
    if (preUser) {
      return res.status(400).json({
        mmessage: "Allredy registered ",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });
    await user.save();

    return res.status(200).json({
      message: "register successfuly",
      success: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "server error",
      success: false,
    });
  }
};


export const Login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password ){
            return res.status(400).json({
                message:"all fields are required",
                success:false,
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"user not registered",
                success:false,
            })
        }

        const compPassword = await bcrypt.compare(password,user.password);

        if(!compPassword){
            return res.status(400).json({
                message:"wrong password",
                success:false,
            })
        }


        const token  = await jwt.sign({id:user._id},process.env.Secret_key,{expiresIn:"1d"});
        
        console.log(token);

        return res.status(200).json({
                message:"Login Success",
                success:true,
                token
            })
              



    } catch (error) {
        return res.status(400).json({
                message:"server error",
                success:false,
            })
            console.log(error)
        
    }


}
