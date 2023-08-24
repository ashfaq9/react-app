import React from 'react'

export default function Spreadoperator() {
//     const numberone =[1,2,3,7,8,9];
//     const numbertwo =[4,5,6];
//     const numbercombine=[...numberone, ...numbertwo];

//     const number =[1,2,3,4,5,6,7,8,9];
//     const [one,two,three, ...rest]= number;
    
// var mytruck={
//   brand:"benz",
//   model:2000,
//   color:"red",
// }
// var UpdateMytruck={
//     brand:"ashok",
//     model:"2007",
//     color:"yellow"
// }
// var myUpdateMytruck={...mytruck,...myUpdateMytruck}
 const numberone =[1,2,3,7,8,9];
 const numbertwo=[4,5,6];
 const numbercombine=[...numberone,...numbertwo];


 const mycollage={
  name:"st.philomena",
  batch:2020,
  class:"first year"
 }
const UpdateMycollage={
  name:"sdm",
  class:"final year",
  batch:"2021"
}
const myUpdatMycollage={...mycollage,...UpdateMycollage}

var msg;
Functions(myUpdatMycollage);
function Functions(){
  msg="My college name is "+myUpdatMycollage.name;
}
  return (
    <div>
      {/* <h1>{one}<br/>{two}<br/>{numbercombine.map((item)=><h3>{item}</h3>)}</h1>{console.log(myUpdateMytruck)}
     */}
    <h1><hr/>Spread operator in arrays : {numbercombine}
    <br/>    <br/>

    Spread operator in arrays using .map method:{numbercombine.map((item)=><h3>{item}</h3>)}
    <hr/>
    </h1>
    {console.log(myUpdatMycollage)}
    <hr/>
     </div>
  )
}

