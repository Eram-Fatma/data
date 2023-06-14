import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const navigate= useNavigate()
        const navigateToWelcome=()=>{ 
        console.log("Pressed!!!")
        navigate("/Welcome");
    }
    return(
       
        <div>Login
            <button onClick={navigateToWelcome}>Click here</button>
        </div>
    )
}

export default Login