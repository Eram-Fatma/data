import React from 'react'

function Greetings(props){
    const num=[1,23,4,6,7]
    const nam3={name:"hekki",age:10}
    const {name,age}=num;
    console.log("name,first");
    return(
        <div>
           <h1 onClick={props.onClick}>Greetings,{props.name}</h1>
           <h2 onClick={props.onClick}>Do the operations here{props.nota}</h2>
           <p>Sum,{props.value}</p>
         </div>
    )
}
export default Greetings