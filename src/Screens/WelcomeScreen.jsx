import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
const WelcomeScreens=()=>{
    const location= useLocation()
    console.log(location.state.name)
    const navigate= useNavigate()
    const navigateToWelcome=()=>{ 
    console.log("Pressed!!!")
    navigate("/toinbox");
    }
    const navigateTologin=()=>{ 
        console.log("Pressed!!!")
        navigate("/");
    }
    return (
        <div>WelcomeScreens
            <button onClick={navigateToWelcome}>Click here</button>
            <button onClick={navigateTologin}>to login</button>
           {location.state.name}
        </div>    
        
    )
}
export default WelcomeScreens
