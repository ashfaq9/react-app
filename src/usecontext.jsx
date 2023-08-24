import React from 'react'
import { useState,createContext,useContext } from 'react'
import { age } from './Modules';

export default function usecontext() {
    const UserContext=createContext();

    function Component1(){
        let name ="john"
        let age=24
        function Add(a,b){
            console.log(+a + +b);
            return a+b;
        }
        return(
            <UserContext.Provider value={{name,age,Add}}>
                <h1>{`hello  ${name}`}</h1>
                <Component2/>
            </UserContext.Provider>
        );
    }

function Component2(){
    return(
        <>
        <h1>Component 2</h1>
        <Component3/>
        </>
    
    )
}


function Component3(){
    const simple=useContext(UserContext);
    return(
        <>
        <h1>Component 3   <br/> age : {simple.age} {simple.Add(2,4)}</h1>
        <h1></h1>
        <Component4/>
        </>
    
    )
}


function Component4(){
    return(
        <>
        <h1>Component 4</h1>
        <Component5/>
        </>
    
    )
}

function Component5(){
    const user=useContext(UserContext);
    return(
        <>
        <h1>Component 5</h1>
        <h1>{`heloo ${user.name} again`}</h1>
    
        </>
    
    )
}
  return (
    <div>usecontext-
<div style={{color:"red"}}>
        <Component1/></div>
       </div>
  )
}
