import React from 'react'

export default function events() {

    const shoot=(e)=>{
        alert("great shot");
        console.log(e)
    }

    const shoot2=(e)=>{
        alert(e);

    }
  return (
    <div>
       
         <h1>..........props test start.............</h1>
         <center><h2>------------------events test  starts----------------------</h2></center>
         <button style={{width:"50%"}} onClick={shoot}>take a shot</button><br/>
        <button style={{width:"50%"}} onChange={()=>shoot2("nice kick")}>take a shot</button>
       < br/>
<input type="text" onChange={shoot}/>

         <h1>..........props test end.............</h1>
  
        
        </div>
  )
}
