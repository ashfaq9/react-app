import React from 'react'

export default function samplearrow() {
  class Day{
    constructor (nme){
      this.brand=nme;
    }
  }
  const myDay=new Day ("tdy")
  return (
    <div><h1>{myDay.brand}</h1></div>
  )
}

