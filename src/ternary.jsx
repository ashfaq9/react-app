import React from 'react'

export default function turnery() {
  function Classes(){
    var a="hello";
  //   if(a=="hello"){
  //     return <h1>Successfull</h1>
  //   } else{
  //     return <h1>Unsuccessfull</h1>
  //   }
  }
var b="hello";
const b1="a";
const b2="s";
 var d="r";
 const f="f";



 const aa="right";
 const bb="left";
const arrow=(cc)=>{
  cc=="right"?
  alert( " clickes right button")
  :
  alert( " clickes left button")

}

const asba=(c)=>{
  
   c=="a"?
   alert ("asba")
   :
   alert ("shaheed")
  
  }
  const far=(g)=>{
    {
      g=="r"?alert("razi"):alert("fayiz")
    }
  }
  

    return (
    <div>
        <h1 style={{color:"red"}}>
          <Classes/>
          {/* {b=="hello" ?
          <> <h1 style={{color:"red"}}>correct</h1></>
          :
          <><h1 style={{color:"red"}}>incorrect</h1></>
        }
        {c=="shaheed"?
         <h1>Successfull</h1>
          :
          <h1>Unsuccessfull</h1>
        } */}
      
        <button id='asb' onClick={()=>asba(b1)} style={{width:"100%",backgroundColor:"yellow",fontSize:"50px"}}>Asbaq</button>
        <button id='shd' onClick={()=>asba(b2)} style={{width:"100%",backgroundColor:"green",fontSize:"50px"}}>shaheed</button>

        <input type={"submit"} value="razii" onClick={()=>far(d)} style={{width:"100%",backgroundColor:"yellow",fontSize:"50px"}}></input>
        <input type={"submit"} value="fayizz" onClick={()=>far(f)} style={{width:"100%",backgroundColor:"green",fontSize:"50px"}}></input>

        <button onClick={()=>arrow(aa)} style={{width:"100%",backgroundColor:"yellow",fontSize:"50px"}}>right </button>
        <button onClick={()=>asba(bb)} style={{width:"100%",backgroundColor:"green",fontSize:"50px"}}>left</button>

          
          
          </h1></div>
  )
}