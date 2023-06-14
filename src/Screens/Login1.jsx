import React, { useState } from 'react'
import './LoginStyles.css'
import { useNavigate } from 'react-router-dom';
const Login1 = () => {
    const navigate= useNavigate()
        const navigateToWelcome=()=>{ 
        console.log("Pressed!!!")
        navigate("/Welcome");
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const formSubmitted=(event)=>{
        event.preventDefault();
        console.log(name,password,email)
        navigate("/welcome",{state:{name,email,password}});        //make state an object
        console.log("hello i am ");
    }
  return (
  
    <div className="container m-5 p-5 ">
        <form onSubmit={formSubmitted}>           
      <center>    Name<br></br> <input className="name " 
                  onChange={(e)=>setName(e.target.value)} 
                  id="name1"/> <br>
                  
                  </br>
                  {/* {name} */}
                  Email<br></br><input className="email mt-3" 
                  onChange={(e)=>setEmail(e.target.value)} id="email"/><br></br>
                  {/* {email} */}
                  Password<br></br> <input className="password" 
                  onChange={(e)=>setPassword(e.target.value)} 
            id="pwd"/><br></br>
                    {/* {password} */}
              
            <br></br><button type="submit" onClick={navigateToWelcome}>Click here to validate the data</button>
            </center> 
        </form>
       
      </div>

  )
}
export default Login1