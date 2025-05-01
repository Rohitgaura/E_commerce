import express from 'express';
import {forgotPasswordController, registerController} from "../controllers/authController.js"
import {loginController,testController} from "../controllers/authController.js"
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router()

//routing

// Register  || method POST

router.post('/register',registerController)

//jwt token generation and authentication
router.post('/login',loginController)
// forgot password

router.post('/forgot-password',forgotPasswordController)

router.get('/test',requireSignIn,isAdmin,testController)

//protector user route path


router.get('/user-auth',requireSignIn,(req,res) => {
    res.status(200).send({ok:true})
})

// protected admin-route path
router.get('/admin-auth',requireSignIn,isAdmin,(req,res) => {
    res.status(200).send({ok:true})
})


export default router


