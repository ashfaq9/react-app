import React from 'react'
export default function text2() {
    class Bus{
        constructor(name){
            this.brand=name;
        }
    }
const mybus=new Bus("benz");
  return (
    <div><h1>{mybus.brand}</h1></div>
  )
}
