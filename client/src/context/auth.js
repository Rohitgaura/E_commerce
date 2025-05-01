import axios  from 'axios';
import {useState,useEffect,useContext,createContext, Children} from 'react'

const AuthContext = createContext()



const AuthProvider = ({children}) =>{
    const [auth,setAuth] = useState(()=>{
        const data = localStorage.getItem('auth');
        return data ? JSON.parse(data) : { user: null, token: null };
    });

    //default axios
   axios.defaults.headers.common['Authorization'] = auth?.token;

    useEffect(  ()=>{
        const data = localStorage.getItem('auth');
        if(data){
            const parsedata = JSON.parse(data);
            setAuth({
               
                user : parsedata.user,
                token : parsedata.token
            })
        }
        //eslint-disable-next-line
    },[])
    return (
        

            <AuthContext.Provider value={[auth,setAuth]}>

                {children}
            </AuthContext.Provider>

    )
}

const useAuth = () => useContext(AuthContext)

export {useAuth,AuthProvider};