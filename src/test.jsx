import React from 'react'
import Useeffect from './Useeffect';
export default function Test() {
    // class Bike{
    //     constructor(name){
    //         this.value=name;
    //     }
    // }
    class Bike{
      constructor(name){
          this.value=name;
      }
      profile(){
        return 'My friend owns a '+this.value;
      }
      past(){
        return ', I sold my ' + this.value;
      }
  }
    class Model extends Bike{
      constructor(name,mod){
        super(name);
        this.model=mod;
      }
      present(){
          return this.profile() + this.past() + ' and purchase a new '+ this.model;
      }
    } 
      const mybike=new Model(" Himalayan "," splender ");
    
      const Bikee=["ninja","jawa","himalayan"];
    const b1=Bikee[0];
    const b2=Bikee[1];
    const b3=Bikee[2];

    var mesgg;
  const vehicleOne1={
    brand:"audi",
    model:"q7",
    type:"car",
    year:2020,
    color:"black",
    rigistration:{
      city:"mamglore",
      state:"karnataka",
      country:"india",

    }

  }

  // myVehicle1(vehicleOne1)

  // function myVehicle1({model,rigistration:{state,country}}){
  //   mesgg="my "+ model+ " is rigisterd in "+ state+".";
  // }
 


    var mesg;  
    const vehichle={
      name:"x5",
      model:2001,
      price:"5000000",
      brand:"bmw",
    }
    myCars(vehichle);
    function myCars({name,model,price,brand}){
      mesg="I have ordered "+name+" "+brand+"-"+model+ "model, the price is "+price+".";
    } 
    

    const [b4,b5,b6]=Bikee
  
const site={
  place:"manglore",
  cent:50,
  price:1000000,
  agrements:{
    owners:"asif,fayiz",
    contact:7678764157,

  }
}
let mds;
mySites(site)

function mySites({place,agrements:{owners,contact}}){
mds="my site is located in "+ place +","+"i sold my property to " +owners+"."+" current owners are "+ owners+".";
}

function Ternary(){
  
// if(z==11){
//   return <h1 style={{color:"blue"}}>Successfull</h1>
// }
// else{
//   return <h1 style={{color:"red"}}>Unsuccessfull</h1>
// }
}
var z=11;


  return (
    <div><h1 style={{color:"blue",marginLeft:"100px"}}>
      <hr/>{mybike.value}<br/>
      {mybike.present()}<br/><hr/>
      {Bikee}<br/>
      {b1}<br/>
      {b2}<br/>
      {b3}<br/><hr/>
      <h3 style={{color:"green"}}>{b4}<br/>
      {b5}<br/>
      {b6}</h3><br/><hr/>
      <h3 style={{color:"brown",marginLeft:"100px"}}>{mesg}</h3>
      {mesgg}
      {mds}
      <br/><Ternary/>
      <br/>
      {z==111?
         <h1 style={{color:"blue"}}>Successfull</h1>
          :
          <h1 style={{color:"red"}}>Unsuccessfull</h1>
      }
      


      </h1></div>
  )
}
