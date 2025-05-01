import React,{useState} from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Layout from '../../component/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import '../style/authStyle.css'
import { useAuth } from '../../context/auth.js';
//import { token } from 'morgan';




const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async(e)=> {
        e.preventDefault()
          try {
            const res = await axios.post('/api/v1/auth/login',{email,password})
            
            
                if(res && res.data.success)
                {
               toast.success("Login Successfully!")
               setAuth({
                ...auth,
                user : res.data.user,
                token : res.data.token
               });
               localStorage.setItem('auth',JSON.stringify(res.data));
               
               navigate(location.state || "/dashboard")
                }
                else{
                  toast.error(res.data.message)
                }
            }
      
            
           catch (error) {
            console.log(error)
            toast.error("Something Went Wrong!")
            
          }
    }
  return (
    <Layout title="Login Page - Ecommerce App">
    <div className="container">
 <div className="Login-card">
   <h1 className="Login-title">Login Page</h1>
   <form onSubmit={handleSubmit}>


     <div className="mb-3">
       <input
         type="email"
         onChange={(e) => setEmail(e.target.value)}
         value={email}
         className="form-control"
         id="exampleInputEmail1"
         placeholder="Enter Your Email"
         required
       />
     </div>

     <div className="mb-3">
       <input
         type="password"
         onChange={(e) => setPassword(e.target.value)}
         value={password}
         className="form-control"
         id="exampleInputPassword1"
         placeholder="Enter Password"
         required
       />
     </div>
     
      <div className='mb-3'>
      <button type="button" className="btn btn-primary btn-submit" onClick={()=>{navigate('/forgot-password')}}>
       Forgot Password
     </button>

      </div>
     <button type="submit" className="btn btn-primary btn-submit">
       Login
     </button>
   </form>
 </div>
</div>

   </Layout>
  )
}

export default Login
