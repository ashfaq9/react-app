import React from 'react'

export default function arroww() {
    function Heloo(){
        return "morninggggg"
    }
    function Htt(probs){
       return <h2>{probs.brand}</h2>
    }
    function Hts(probs){
        

        return (
        <>
        <h1>firoz coming or not?</h1>
        <Htt brand={probs.id}/>
        </>)
    }
    function Ashfaqq(prs){
        return <h2>{prs.brand}</h2>
    }
    function Aaa(prs){
        return(
            <>
            <h3>where is firozA  </h3>
            <Ashfaqq brand={prs.id}/>
            
            </>
        )
    }

    class Az{
        constructor (name){
            this.brand=name;
            
        }

        past(){
            return'my name'+ this.brand;
    
        }
        present(){
            return'recent name'+this.brand +' kulsuma';
        }

       
    }
    const myaz = new Az  (" raisha");
  return (
    <div>
       <Heloo/> <Hts id="yes"/>
       <Aaa id="mumbai"/>
{myaz.past() } <br/>
{myaz.present()} 

    </div>
  )
}
