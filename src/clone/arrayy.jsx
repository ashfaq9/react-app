import React from 'react'

export default function arrayy() {

  
  const d =[[1,2,4,5,7,7,2],[90,6,8]]
  const f=["rabhi","rafi","raisha"];
  const c=["bmww","audi","maruti"];
  return (
    <div>
    aa {d.map((item)=> <h3>{item}</h3>)}<hr/>
{f.map((item)=><h2> {item}</h2>  )} <hr />
    {c.map((item)=> <h3>{item}</h3>)}
    
    </div>
  )
}

