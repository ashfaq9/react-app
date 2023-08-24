import React from 'react'

export default function ist() {

    function Car(probs){
        return <h1><li>i am a  {probs.brand} {probs.i}</li></h1>
    }

    function Print(props){
        return <h2>{props.value}</h2>
    }
    let aaa =[1,2,3,4,5]
    

    function Garage(){
        const cars =["ford","bmw","audi"];
        return(
            <>
            <h1>who lives in my garage</h1>
            <ol>
                {cars.map((car,index)=><Car brand={car} i={index}/>)}
                </ol></>
        );
    }
  return (

<div>

        <h1>-----------list start-----------</h1>
        <Garage/>
       {aaa.map((b)=><Print value={b}/>)}

        <h1>-----------list end -----------</h1>
        </div>
  )
}
