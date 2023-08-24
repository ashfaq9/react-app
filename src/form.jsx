import React from 'react'

export default function form() {
    function Myform(){
        return(
            <form action="classes.jsx">
            <label>enter your name:
                <input type ="text"/>
            </label>
            <input type="submit" value ="submit"/>
            </form>
        )
    }
  return (
    <div>
        <h1 >--------------------form start-----------------------</h1>


        
        
        {<Myform/>}
    
    
    
        <h1 >--------------------form end-----------------------</h1>


    </div>
  )
}
