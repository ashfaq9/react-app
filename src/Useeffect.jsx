import React from 'react'
import { useEffect } from 'react';
import {useState }from 'react'

export default function Useeffect() {

    function Timer(){
        const [count ,setCount]=useState(0);
        useEffect(()=>{
            setTimeout(()=> {
            setCount((count)=>count + 1);
        },1000);
    });
    return <h1> i have rendered {count}</h1>
}

const [num1,setNum1]=useState(0);

const [count , setCount]=useState(0);
const [sum , setSum]=useState(0)
useEffect(()=>{
    setSum(count * 10)
},[count])

useEffect(()=>{
    alert ("ashfaq")
},[num1])

useEffect(()=>{
    alert ("hello")
},[count])


const [time1,setTime]=useState(0)
setTimeout (()=>{
    setTime(time1+1);
},10000);

useEffect(()=>{
    alert("morning")
})

  return (
    <div>
       <center> <button style={{color:"red",width:"30%",borderColor:"blue"}} onClick={(()=>{setNum1(num1+1)})}>button-{num1}</button></center>
        <Timer/>      
sum ={sum }<br/>
<button onClick={()=>setCount(count +1)}>count-{count}</button><br/>
{time1}
    </div>
  )
}
