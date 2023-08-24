import React from 'react'

export default function samplearrow2() {
  const Greeting=(val)=>{
    return alert("Good Morning "+val)
  }
  const a="shaheed"
  const bb="asbaq"

  
  
    return (
    <div>
        <button onClick={()=>Greeting(a)}>Click to view variable</button>
        <br/><br/><br/><button onClick={()=>Greeting(bb)}><h1>Home</h1></button></div>
  )
}
