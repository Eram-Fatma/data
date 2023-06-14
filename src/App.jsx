import Greetings from './Components/Greetings';
import './App.css'
import Navigation from './Navigation/Navigation';
function App(){
  const name="Dev";
  const value=10
  const click1=()=>{
    console.log("hi he")
  }
  const click2=()=>{
   console.log("here is red")
   alert("hello")
  }

  
  return (
    <Navigation/>
  );
}

export default App;

