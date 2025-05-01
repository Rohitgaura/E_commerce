import React , {useState} from 'react'
import Layout from '../../component/Layout'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const ForgotPassword = () => {
    const [email,setEmail] = useState("")
    const [newPassword,setnewPassword] = useState("")
    const [answer,setAnswer] = useState("")
   
    const navigate = useNavigate()
    

    const handleSubmit = async(e)=> {
        e.preventDefault()
          try {
            const res = await axios.post('/api/v1/auth/forgot-password',{email,newPassword,answer})
            
            
                if(res && res.data.success)
                {
               toast.success("Login Successfully!")

               navigate( "/login")
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
    <Layout title='Forgot-password'>
       <div className="container">
 <div className="Login-card">
   <h1 className="Login-title">Reset Password</h1>
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
         type="newPassword"
         onChange={(e) => setnewPassword(e.target.value)}
         value={newPassword}
         className="form-control"
         id="exampleInputPassword1"
         placeholder="Enter New Password"
         required
       />
     </div>


     <div className="mb-3">
       <input
         type="text"
         onChange={(e) => setAnswer(e.target.value)}
         value={answer}
         className="form-control"
         id="exampleInputEmail1"
         placeholder="who is your best friend?"
         required
       />
     </div> 



     <button type="submit" className="btn btn-primary btn-submit">
       Reset Password
     </button>
   </form>
 </div>
</div>

    </Layout>
  )
}

export default ForgotPassword
