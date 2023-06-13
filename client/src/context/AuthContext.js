import {createContext, useState, useEffect} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => { 
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => {
        return JSON.parse(localStorage.getItem("token")) || null;
    });

    const navigate = useNavigate();

    const loginUser = async (userDetails) => {
        const res = await fetch ('http://127.0.0.1:8000/api/auth/token/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        const data = await res.json();
        if (res.status === 400){
            toast.error(data.non_field_errors[0]);
        }

        if (res.status ===200){
            setToken(data.auth_token);
            localStorage.setItem('token', JSON.stringify(data.auth_token));
            navigate("/dashboard");
        }

        console.log(res.status);
        console.log(data);
        
    }

    const signUpUser = async (incomingBody) => {
        const response = await fetch('http://127.0.0.1:8000/api/auth/users/', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(incomingBody)
        });
        const data = await response.json();

        console.log(response.status);
        if (response.status === 400) { 
            if (data.username) {
                toast.error(data.username[0]);
            } else if (data.email) {
                toast.error(data.email[0]);
            } else if (data.password) {
                toast.error(data.password[0]);
            }
        }

        if (response.status === 201) {
            toast.success(`Registered successfully, welcome ${
                data.username
            }`);
            // setUser(data)
            // setTimeout(() => {
            //     navigate("/dashboard");
                
            // }, 2000);
            loginUser({
                email: incomingBody.email,
                password: incomingBody.password,
            });
        }
        console.log(data);
    }

    const getCurrentUser = async ()=>{
        const res = await fetch('http://127.0.0.1:8000/api/auth/users/me', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        },
        });
        const data = await res.json();
        setUser(data)
    };

    const logOutUser = async ()=>{
        const res = await fetch('http://127.0.0.1:8000/api/auth/token/logout/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        }
        });

        // const data = await res.json();
        // console.log(data);
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        navigate("/")
    }

    
    const AuthData = {
        // name: 'david',
        // location1: 'ojuelegba',
        user,
        loginUser,
        signUpUser,
        token,
        getCurrentUser,
        logOutUser
        
    };
    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
}
