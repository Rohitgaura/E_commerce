import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import Layout from '../../component/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import '../style/authStyle.css'

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("") 
    const [address,setAddress] = useState("")
    const [answer,setAnswer] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e)=> {
        e.preventDefault()
          try {
            const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address,answer})
            
            
                if(res && res.data.success)
                {
               toast.success("Registered Successfully Please login")
               navigate("/login")
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
    <Layout title="Register Page - Ecommerce App">
     <div className="container">
  <div className="register-card">
    <h1 className="register-title">Register Page</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleInputName1"
          placeholder="Enter Your Name"
          required
        />
      </div>

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
      
      <div className="mb-3">
        <input
          type="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="form-control"
          id="exampleInputPhone1"
          placeholder="Enter Your Phone Number"
          required
        />
      </div>
      
      <div className="mb-3">
        <input
          type="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className="form-control"
          id="exampleInputAddress1"
          placeholder="Enter Your Address"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="answer"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
          className="form-control"
          id="exampleInputAddress1"
          placeholder="What is your best friend Name?"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-submit">
        Submit
      </button>
    </form>
  </div>
</div>

    </Layout>
  )
}

export default Register
