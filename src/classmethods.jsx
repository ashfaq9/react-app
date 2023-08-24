import React from 'react'

export default function Classmethods() {
    class Collage 
    {
        constructor(name){
            this.brand=name;
        }
        present(){
            return 'i studied at'+this.brand;
        }
    }
    class Model extends Collage{
        constructor(name,mod){
            super(name);
            this.model=mod;
        }
        show(){
            return this.present() + ' , it is at ' + this.model;
        }
    }
    const mycollage=new Model(" Philomena","Puttur");

class Bng{
constructor (hlo){
    this.brand=hlo;
}
now(){
    return "yesterday i am" +this.brand;
}
}
class Mng extends Bng{
    constructor (hlo,hy){
        super(hlo);
        this.hy=hy;
    }
    yesterday(){
        return this.now()+ "today at morning " + this.hy;
    }}
    const mymng = new Mng("Mangaluru");



  return (
    <div>
{mycollage.present()},{mycollage.show()}{console.log(Model)}

{mymng.now()}
    </div>
  )
}
