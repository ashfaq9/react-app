import React from 'react'

export default function Classinheritance() {


    class Car {
        constructor (name){
            this.brand=name;
        }
        present(){
            return ' I have a brand new ' + this.brand ;
        }
        past(){
            return ' I sold my old '+this.brand;
        }
        future()
        {
            return' i will upgrade this '+this.brand+' in 2 years.';
        }
    }

    function Dar(dd){
        return <h2> {dd.brand}</h2>
    }
    function CC(dd){
        return(
        <>
            <h2>my name </h2>
            <Dar brand={dd.id}/>
            </>

        )
    }

    const mycar=new Car("bentley");


  return (
    <div>{mycar.present()}<br/>
    {mycar.past()}<br/>
    {mycar.future()}<br/><br/>
<CC id="Ayishath Raisha"/>
</div>
  )
}
