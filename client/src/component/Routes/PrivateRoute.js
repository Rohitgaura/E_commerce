import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth.js';
import { Outlet} from 'react-router-dom';
import Spinner from './Spinner.js';
import axios from 'axios';

export default function Privateroute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth(); // No need for setAuth

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("/api/v1/auth/user-auth");
            if(res.data.ok)
            {
                setOk(true);
            } else{
                setOk(false);
            }
        };

        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);

 

    return ok ? <Outlet /> : <Spinner />;
}
