import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function shaheed() {
  function Appi(){
    const [count, setCount2]=useState(0);
      useEffect (()=>{
        setTimeout(()=>{
          setCount2((count)=>count + 1);
        },1000);
      });
      return <h1>  rended {count}</h1>
    
  }
  return (
    <div><Appi/></div>
  )
}


