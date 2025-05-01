import { hashPassword } from "../helpers/authHelper.js";
import { comparePassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import dotenv from 'dotenv';
// import { comparePassword } from 

dotenv.config();
export const registerController = async(req,res)=>{
    try {

        const {name,email,password,phone,address,answer} = req.body;

        if(!name)
            return res.send({message:"name is required"});
        if(!email)
            return res.send({message:"email is required"});
        if(!password)
            return res.send({message:"password is required"});
        if(!phone)
            return res.send({message:"phone is required"});
        if(!address)
            return res.send({message:"address is required"});
     if(!answer)
            return res.send({message: "answer is required"})

        
         //check user
        const existingUser = await userModel.findOne({email});

        //check existing user
        if(existingUser)
        {
            res.status(200).send(
                {
                    
                    success:false,
                    message: "already register please login"
                }
            )
        }
        //Register user


        const hashedPassword = await hashPassword(password);

        // save

        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password:hashedPassword,answer
        }).save();

        res.status(201).send({
            success:true,
            message:"user register successfully",
            user
        })

    } catch (error) {
        console.log(error);

        res.status(500).send({
            success : false,
            message : "Error in registering user",
            error
        })

        
    }
};

export const loginController = async(req,res)=>{
    try {

        const {email,password} = req.body;
       
        if(!email || !password){
            res.status(404).send({
                success : false,
                message : "user not found, please register first",
            })
        }
         //check user
         const user = await userModel.findOne({email});
         if(!user){
            res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
         }
        const match = await comparePassword(password,user.password);

        if(!match){
            return res.status(200).send({
                success : false,
                message : "Invalid password"
            })
        }
    //token generation

    const token = await JWT.sign({_id: user._id} ,process.env.JWT_SECRET,{expiresIn: "7d"})

    res.status(200).send({
        success: true,
        message : "User logged in successfully",
        user :{
            name : user.name,
            email : user.email,
            phone : user.phone,
            address : user.address,
            role : user.role

        },
        token,
    })

    } catch (error) {
        console.log(error);

        res.status(500).send({
            success:false,
            message: "error in login",
            error
        })
        
    }

}
//forgot password controller

export const forgotPasswordController = async(req,res)=>{

    try{

        const {email, answer ,newPassword} = req.body
        if(!email)
            {
                res.status(400).send({
                    message: 'Email is required'
                })
            } 
        if(!answer)
                {
                    res.status(400).send({
                        message: 'answer is required'
                    })
                } 
        if(!newPassword)
                    {
                        res.status(400).send({
                            message: 'newPassword is required'
                        })
                    } 
      //check
    const user = await userModel.findOne({email,answer})

    



    //validation
    if(!user)
    {
        res.status(400).send({
            message:'Wrong Email or Answer'
        })
    }

    const hashed = await hashPassword(newPassword)
    await userModel.findByIdAndUpdate(user._id,{password: hashed})
     
    res.status(200).send({
        success: true,
        message : 'Password Reset Successfully'
    })

    }catch(error)
    {
        console.log(error)
        res.status(500).send({
            success:true,
            message : 'something went wrong',
            error
        })

    }
}

//test controller token

export const testController = (req,res) =>{
    try {
        res.send("protected Routes")
    } catch (error) {
        console.log(error);
        res.send({error});
    }
}


//admin access




