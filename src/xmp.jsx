 import React from 'react'

 export default function Xmp() {

    class polo{
        constructor(car){
            this.brand=car;
        }
    }
     const mygt=new polo("  EXPLORE ");

     
function Ash(probs){
    return <h1>a am from {probs.brand} </h1>
}
function Ashh(probs){
  return (
    <>
    <h2>am ashfaq </h2>
    <Ash brand={probs.id}/>
        </>
  );
}

     class GT{
        constructor(car){
            this.brand=car;
        
        }  
     
bcc(){
    return "2018 i have purchased" +this.brand + " .";
}
abb(){
    return "2020 i sold my  old cars";
    
}
}


class Model extends GT{
    constructor(car,mod){
super(car);
this.Mode=mod;
    }
    xxx(){
        return  this.bcc()+ this.abb()  +" and  purchased  " +this.Mode +".";


    }

}
const mygti= new Model(" CAR MUSIUM","new  cars");


const Carr=(ab)=>{
    return alert ("i want buy "+(ab));
}

const bmw=["bmw x3 | "," bmw  x5  | ","bmw  x7  ",];
const audi=["audi q3","audi q5","audi q7"];

const g1=[...bmw,...audi];
const g2=[...audi];

const [as,df,gf,hj]=g2;


var s="bmw";
var n="audi";
const sn=(nn)=>{
   
    nn=="bmw"?
    alert(" have" +s+ "x1")
    :
    alert(" have "+n+ " q5")
   }

   return (
     <div>
    <center> <h1  style={{color:"red",width:"100%",fontFamily:"cursive",backgroundColor:"black",fontSize:"50px"}}>  {mygti.brand} <hr/></h1></center> 
     <hr/> <h1>{mygti.xxx()}</h1>
<h1 style={{color:"blue",width:"105%",textAlign:"center",fontFamily:"cursive",backgroundColor:"skyblue",fontSize:"50px"}}>{mygt.brand}</h1>
<h1> {bmw}</h1>
<h1>-{as}<br/>
-{df}<br/>
-{gf}<br/></h1>
<Ashh id="mnglr"/>
<center><button style={{fontSize:"24px",width:"50%"}} onclick={()=>sn(s)}>BMW</button></center>
<h1><button style={{fontSize:"24px",width:"50%"}} onclick={()=>sn(n)}>AUDI</button></h1>

 <h1><button style={{width:"30%",textAlign:"center",backgroundColor:" purple",fontSize:"44px"}} onClick={()=>Carr("GTR")}>NOTE</button></h1>  </div>
)        

   }
   