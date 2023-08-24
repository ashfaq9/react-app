
import React from 'react'
import {adress,pincode,aaa,bbb } from './Modules'
import Mmmm from './Modules'
import fun from './fun'
import { useState, useEffect } from 'react'
export default function Classtest() {
 

const Greating=()=>{
    return "Hello world!"

}
const Appi=()=>{
    return "bbbbbb"
}

const Greating2=(val)=>{
    return alert ("hello "+val+", welcome");
}

 const Invite=(vas)=>{
    return alert ("today"+vas+"function");
 }
 const Ashfaq=(abc)=>{
    return alert ("i want buy "+abc+ ". ")

 }
 const basket1=["apple,","banana,","grapes","grapes"];
 const empty=[" ll"," | "," "];
 const basket2=["apes","starfruit,","chiku"];

 const fruits1=[...basket1,...empty,...basket2];
 const fruits2=[...basket1,...basket2];

 const [ab,bc,cd,ef,...rest]=fruits2;


 const Bike1={
    brand:"ford",
    model:"mustang",
    color:"red"

 }
 const Bikee={
    type:"car",
    year:2021,
    color:"yellow"
 }

 const newBike1={...Bike1,...Bikee};


 const a="true";



 const aa="right";
 const bb="left";
 const arrow=(cc)=>{
    cc=="right"?

    alert ("you have clicked "+aa+" button")
    :
    alert("you have clicked "+bb+" button")
 }
function Frut(probs){
    return
     <h1>they are{probs.brand.map((item)=><h2>{item}</h2>)}</h1>
}
function Frut1(){
const fruits=["apple","banana","orange","mango","chikku"];
return(
 <>
    <h1>i have {fruits.length} fruites</h1>
     <Frut brand={fruits}/>
 </>
); 
}
 
function Clss(probs){
    return <h2>hellllllllo {probs.brand}</h2>
}
function Clgg(probs){
    return(
        <>
        <h2>department</h2>
        <Clss brand={probs.name}/>
        </>
    );

}


 
    class Profile{
    constructor(name){
        this.value=name;
    }
    per(){
        return "My name is '"+this.value;
    }
  }
class Qualification extends Profile{
    constructor(name,lang){
        super(name);
        this.item=lang;
    }
    dev(){
        return this.per()+" and Am an "+this.item+" developer."
    }
}

  const myprofile=new Qualification("Mohd shaheed.","React");
  
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

function A1(){
    return<h1>goal</h1>
}
function A2(){
    return<h1>missed goal</h1>
}
function A3(probs){
    const aGoal=probs.aGoal
    if (aGoal)
return <A1/>
else{
    return <A2/>
}
}

const [name,setName]=useState("asfan");
const changename=()=>{
    setName("riza");
}

const [color,setColor1]=useState("blue");
const changecolor1=()=>{
    setColor1("yellow");
}
const changecolor2=()=>{
    setColor1("green");
}
const changecolor3=()=>{
    setColor1("aqua");
}

const [count1 ,setCount1]=useState(0);
const [square,setSquare]=useState(0)

useEffect(()=>{
    setSquare(count1*count1);
})





   return(
    <div>
        <h1>--------------class test--------------</h1>
       <h1> {myprofile.dev()}</h1>

    
        <h1>--------------class test end--------------</h1>

        <h1>--------------arrow fumction test  start--------------</h1>
       <h1>      <Greating/>                       </h1>
       <h1>      <Appi/>                       </h1>

            <button style={{backgroundColor:"yellow",fontSize:"24px"}} onClick={()=>Greating2("asbaq")} >asbaq</button>
        <h1>--------------arrow fumction test  end --------------</h1>

        <button style={{backgroundColor:"green",fontSize:"24px"}} onClick={()=>Invite("  night ")}>apppppppppi</button><br/>


        <h1>--------------Spread operator test starts--------------</h1>
       <h1>                             {fruits1} <br/> 
<hr/>
       destrucuring in spread operator : <br/>
       -{ab}<br/>
       -{bc}<br/>
       -{cd}<br/>
       -{ef}<br/>
       -{rest}                  
       {console.log(newBike1)}        </h1>
    
        <h1>--------------Spread operator test end--------------</h1>
<hr/>

        <h1>--------------ternary operator test starts--------------</h1>
      
      {a=="true"?
    <h1 style={{color:"blue"}}>hello word true</h1>
    :
    <h1 style={{color:"red"}}>hello word false</h1>
    
    }
    <button style={{fontSize:"24px",width:"50%"}} onClick={()=>arrow(aa)}>right</button><br/>

    <button style={{fontSize:"24px",width:"50%"}} onClick={()=>arrow(bb)}>left</button>



        <h1>--------------ternary operator test end--------------</h1>

        <h1>--------------modules Test start--------------</h1>
{aaa}<br/>{bbb}<br/>{adress}<br/>{pincode}
      <br/>
      <button style={{width:"40%",fontSize:"50px",fontFamily:"serif",backgroundColor:"yellow"}} onClick={()=>Mmmm(5,4,1)}>Add</button>


        <h1>--------------modules Test end--------------</h1>


        <h1>---------------props test start------------------</h1>
        <Function3 id="Puttur"/>
        <Frut1/>
        <Clgg name="ashfaq"/>
        
         <h1>---------------props test  end------------------</h1>

         <h1 >--------------------conditional start-----------------------</h1>

<A3 aGoal={false}/>

         <h1 >--------------------conditional end-------------------------</h1>
         <h1 >--------------------ustate start------------------------</h1>
    <h2> {name}</h2>
   <h3><center> <button onClick={changename}>change name</button></center></h3><br/>
  
 <h2> my favorite color:   {color}</h2>
 <button sty onClick={changecolor1}style={{backgroundColor:"blue"}}>blue</button><h2/>
  <button onClick={changecolor2}style={{backgroundColor:"green"}}>green</button>
 <button onClick={changecolor3}style={{backgroundColor:"aqua"}}>aqua</button>
  
  <br/>
  <h1 >--------------------ustatte end------------------------</h1>

  <h1 >-------------------------usefffect start---------------------------</h1>
  square -<h2 > {square}</h2>
<button onClick={()=>setCount1(count1+1)}>count-{count1}</button>


  <h1 >-------------------------usefffect end---------------------------</h1>

   <button style={{backgroundColor:"purple",fontSize:"26px"}}onClick={()=>Ashfaq("bmw")}>car</button>
    </div>
   )
}