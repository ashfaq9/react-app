import React from 'react'

export default function arrow() {
  function Ab(bbb){
    return alert( "welcome" ) ;
  }
  function Rais(probs){
    return <h1>{probs.brand}</h1>
  }
  function Rais1(probs){
    return(
      <>
      <h1>who win fifa </h1>
      <Rais brand={probs.id}/> </>
    );
    
  }
  const hlo=(a)=>{
    return  <h1>{a}</h1>
  }
const ax=["ashhhh","shahhed","rzzzzzzz"]
    const dx=[11,22,33,44]
  return (
    <div>
    <h1>{ax.map((itemm)=><h2>{itemm}</h2>)}</h1>
{/* <button style={{ backgroundColor:"orange",fontSize:"24px",width:"10%"}} onClick= {()=>Ab("bbb")}>rrrrr</button> */}
    <Rais1 id="moraco"/>
    </div>
  )
}
