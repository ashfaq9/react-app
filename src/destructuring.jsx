import React from 'react'
import fun from './fun';

export default function destructuring() {
  const cars=["ford","bentley","porshea"];
//   const car1=cars[0];
//   const car2=cars[1];
//   const car3=cars[2];

    const [car4,car5,car6,car7]=cars
//destructuring array:-
    const a=[5+5,10+10];
    const b=[2*6,6/2];
    const [q,w]=a;
    const [x,y]=b;

//destructuring objects:-
    const vehicle={
        brand:'ford',
        model:'rapter',
        type:'car',
        year:2021,
        color:'red'
    }

    const profile={
        name: "asbaq",
        language:"React",
        experience:5
    }
    var mes;

    Myprofile(profile)
    function Myprofile({name,language,experience}){
        mes="My name is "+name+". "+"Am a "+language+" developer. I have "+experience+" years of experience in "+language+"."
    }

    var message;
    myFunction(vehicle)
    function myFunction({brand,model,type,year,color}){
        message="I have a "+type+", "+brand+"-"+model+" which is in "+color+" color"+"."
    } 
//spread operation in arrays
const aa=[1,2,3,4,5];
const bb=[6,7,8,9];
const ee=["apple","banana"];
const cc=[...aa,...bb,...ee];

// destructuring in spread operator
const n=[0,9,8,7,6,4,3,2,1];
const [xx,yy,zz,...rest]=n;

const friends={
    name:"asbaq",
    age:21,
    place:"up"
}
const details={
    number:987654321,
    grade:"A",
    bg:"A+"
}

var myfriends={...friends,...details}

    return (
    <div><hr/><h1>{cars}<br/><hr/>
    {car4}<br/> 
    {car5}<br/>
    {car6}<br/>
    {car7}
    q={q}<br/>
    w={w}<br/>
    x={x}<br/>
    y={y}<br/>
    a={a}<br/>
    b={b}<br/></h1>
    <h1>{message}<br/><hr/>{mes}
   <hr/>Spreadoperation in arrays<br/> {aa}<br/>{bb}<br/>{cc}<br/><hr/>destructuring in Spreadoperation : {zz}<br/>{rest}
    {console.log(myfriends)}<br/>object name with key:{myfriends.age}-(object cannot be printed fully bcz objct contains 2 elements, if we want to display use console.log)
    <hr/>
    </h1></div>
  )
}
