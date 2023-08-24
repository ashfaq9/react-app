import React from 'react'

export default function variable() {
  const a= "const a";
  var b="var b";
  let c="let c";

  const myElement=<h1>dayy  </h1>
  
  
    return (
      <>
    <div><h3>Variables are :&nbsp;{a}, {b}, {c}</h3></div>
    <button onClick={ ()=>alert("ashfaq")}>adddss</button>
{myElement}
<input type="email" name="email" />
    </>
  )
}

