import React from 'react'
import fun from './fun';

export default function props(props) {
    function Name(props){
        return<h2>hello{props.title}</h2>;
    }
    function Car(props){
        return <h1> {props.name}</h1>

    }
    function Function2(probs){
        return <h2>Am from {probs.brand}</h2>
    }
    function Function3 (probs) {
        return(
            <>
            <h1>Am Mahammad shaheed and</h1>
            <Function2 brand={probs.id}/>
            </>
        );
        
    }

    function Vehichle(props){
        return <h2>{props.brand}</h2>;
    }
    function Showroom(probs){
        const CarName="BMW";
        return(
            <>
            <h1>Who lives in my garage</h1>
            <Vehichle brand={CarName}/>
            </>
        );
    }


    function Collage(probs){
        return (
            <>
             <h2>i am a{probs.brand.name}  </h2>
             <h2>student of {probs.brand.school}  </h2>
            </>
        )
        
    }

function Student(probs){
    const Detail ={name:"jack",school:"Aloy"};
    return(
    <>
    <h1>who is admited</h1>
    <Collage brand ={Detail}/>
    </>
    );
}
var value="BMW";
const MyElement =<Car name={value}/>
    
  return (
    <div><hr/>
     <h1>---------------props start------------------</h1>
    <Name title=" asba"/>
    {MyElement} <Function3 id="Puttur"/>   {props.title}
<Student />
    <h1>---------------props end------------------</h1>
    </div>
  )
}
