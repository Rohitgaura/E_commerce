import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';


export const requireSignIn = async (req, res, next) => {
      
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();

    } catch (error) {
       console.log(error)
    }

}


export const isAdmin = async (req,res,next) =>{

    try {

        const user = await userModel.findById(req.user._id)
        if(parseInt(user.role)!==1)
        {
            return res.status(403).send({
                success : false,
                message : "No admin"
            })
        }
        else{
            next();
        }

        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success : false,
            message : "Failed to authenticate token",
            error
        })
        
    }


}