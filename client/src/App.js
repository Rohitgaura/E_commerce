import { Routes, Route } from 'react-router-dom'
// It works like a container and all routes will be present here
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';

//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard.js';
import Privateroute from './component/Routes/PrivateRoute.js';
import ForgotPassword from './pages/Auth/ForgotPassword.js';
import AdminRoute from './component/Routes/AdminRoute.js';
import AdminDashboard from './pages/admin/AdminDashboard.js'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/dashboard" element={<Privateroute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>

        <Route path = "/dashboard" element= {<AdminRoute/>}>
          <Route path ="admin" element={<AdminDashboard/>}/>
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element = {<ForgotPassword/>}/>

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
