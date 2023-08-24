import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom' 
export default function Usestate() {
    const [value ,setValue]=useState("ashh")
    const change=()=>{
        setValue("shahhd")
    }
    const [values ,setColor]=useState("white")
    const color=()=>{
        
    }

    
    
    const [Fruitess, setFruites]=useState(["apple ","grapes ","orange"])

    const [car1,setCar1]=useState({
      brand:"mercedece Benze",
      model:"GLC",
      year:"2007",
      color:"white "
    });
const frutt1=()=>{
  setFruites(["chikku ","mango  ","banana"])
}
const changecolor=()=>{
  setCar1((c)=>{
    return{...c,color:"green"}
  }) 
}
const [numm ,setNum]=useState("one")
const num=()=>{


}

let a ={name:"aj",adress:"manglore",age:"20"}
let b={...a,adress:"puttur"}

    // ...........................
  
  return (
    <div>
        {value}
        <br/><button onClick={change}>change</button><hr/>
    <h2><center>{values}<br/></center></h2>
   <center> <button onClick={()=>{setColor("white")}}style={{backgroundColor:"white"}}>white</button>
    <button onClick={()=>{setColor("red")}}style={{backgroundColor:"red"}}>red</button>
    <button onClick={()=>{setColor("blue")}}style={{backgroundColor:"blue"}}>blue</button></center>
   <hr/>{Fruitess.map((i)=><h3>{i}</h3>)}
   <button onClick={frutt1}>frutuies</button>
<hr/>
  <center>{car1.brand}{console.log(car1)}</center><br/>
{car1.color}
<button onClick={changecolor}>change color</button>
   <hr/>
   {a.adress}
   {console.log(b)}
   <hr/>
  <h4> <center><button onClick={()=>{setNum("one")}} 
   style={{border:"2px solid black",fontSize:"10px",padding:"10px 14px",display:"inline-block",color:"white",backgroundColor:"green"}}>1</button>   
<button onClick={()=>{setNum("two")}} 
style={{border:"2px solid black",fontSize:"10px",padding:"10px 14px",display:"inline-block",color:"white",backgroundColor:"green"}}>2</button>
<button onClick={()=>{setNum("three")}} 
style={{border:"2px solid black",fontSize:"10px",padding:"10px 14px",display:"inline-block",color:"white",backgroundColor:"green"}}>3</button></center></h4>
<center><h2>
{numm}</h2> </center><hr/>

<Link to ="rigistration">rigistration</Link>
 </div>
  )
}
