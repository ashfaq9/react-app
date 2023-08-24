
import React, {useState} from 'react'

export default function Propsdrill() {

    function Function1(){
        const [user,setUser]=useState("raazzz");
        return (
            <>
            <h1> function 1</h1>
            <Function2 user={user}/>
            </>
        );
    }
    function Function2({user}){
        return (
            <>
            <h1> function 2</h1>
            <Function3 user={user}/>
            </>
        )
    }

    function Function3({user}){
        return (
            <>
            <h1> function 3</h1>
            <Function4 user={user}/>
            </>
        )
    }
    function Function4({user}){
        return (
            <>
            <h1> function 2</h1>
            <Function5 user={user}/>
            </>
        )
    }
    function Function5({user}){
        return (
            <>
            <h1> function 2</h1>
            <h2>{'helo'+user}</h2>
        
            </>
        )
    }

  return (
    <div><Function1/></div>
  )
}