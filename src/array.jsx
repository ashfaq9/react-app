import React from 'react'


export default function array() {
const Value2=(value)=>{
    return <h1>{value.value}</h1>
}

const a=[[1,2,3,4,5],[6,7,8,9,0]]
const b=["apple","banana","grapes","pineapple"]
const c=["asbaq","shaheed","fayiz"]

  return (
    <div><h1/>Array : {a.map((item)=> <h3>{item}</h3>)}<hr/>
    {b.map((item)=> <h3>{item}</h3>)}<hr/>
    {c.map((item)=> <h3>{item}</h3>)}
    </div>
  )
}