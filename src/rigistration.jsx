import React from 'react'
import { useState } from 'react'
import img from './2.JPG'
import img2 from './5.jpeg'
import img3 from './3.jpg'
import {card ,col,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom'

<h1>heloooo</h1>

export default function Rigistration(studentdetail) {
const [name,setName]=useState("")
const [phone,setPhone]=useState("")
const [email,setEmail]=useState("")
const [address,setAddress]=useState("")

const Rigister=()=>{
console.log("Name"+name);
console.log("Phone"+phone);
console.log("Email"+email);
console.log("Address"+address);
}

// const  studentdetail=[
//     {
//       id:201,
//         name:"razi",
//         rollno:19856,
//         class:"BCA",
//         image:<img src={img} class="card-img-top" alt="hasbaq"/>
//     },{
//       id:202,
//       name:"shahhed",
//       rollno:19877,
//       class:"BA",
//       image:<img src={img2} class="card-img-top" alt="hasbaq"/>
//     },{
//       id:203,
//       name:"asif",
//       rollno:19887,
//       class:"sslc",
//       image:<img src={img3} class="card-img-top" alt="hasbaq"/>
//     }

// ]
function Display({profile}){
  return(
    <>

<div class="card" style={{width: "18rem"}}>
  {profile.image}
  <div class="card-body">
    <h5 class="card-title">Name:{profile.name}</h5>
    <h5 class="card-title">Roll No:{profile.rollno}</h5>
    <h5 class="card-title">Class:{profile.class}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}
//onClick={()=>Deletes(item.id)}
  return (
    

    <div classname="table  table-primary" style={{margin:"100px"}}  >
        <br/>

       <table style={{border:"2px solid black",backgroundColor:"peachpuff"}}>
        <tr>
            <td>
               Name : <input style={{}} type="text"  onChange={(e)=>setName(e.target.value)}></input>
            </td>
        </tr>
        <tr>
            <td>
         number :<input style={{}} type="number" onChange={(e)=>setPhone(e.target.value)}></input>
            </td>
        </tr>
        <tr>
            <td>
            Email :    <input style={{}} type ="mail" onChange={(e)=>setEmail(e.target.value)}></input>
            </td>
        </tr>
        <tr>
            <td>
            Adress :<input style={{}} type ="text" onChange={(e)=>setAddress(e.target.value)}></input>
            </td>
        </tr>

        <tr>
            <td>
           <center><button onClick={Rigister}>rigister</button></center> 
            </td>
        </tr>
        

       </table><br/><hr/>
       <table className="table  table-default" >
        
        <tr>
            <th>
                Email
            </th>
        </tr>
        <tr>
        <td>
                <input type="text"placeholder='enter your name' />
            </td>
        </tr>
        <tr>
            <th>
                Name
            </th>
        </tr>
        <tr>
        <td>
                <input type="text"placeholder="enter name"/>
            </td>
        </tr>
      </table>
<hr/>

      <table class="table">
  <thead>
    <tr className='table table-warning'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>safwN</td>
      <td>asbaq0@gmail.com</td>
      <td> 7618764731</td>
    </tr>
    <tr  className='table table-secondary'>
      <th scope="row">1</th>
      <td>safwN</td>
      <td>asbaq0@gmail.com</td>
      <td> 7618764731</td>
    </tr>
    
  </tbody>
</table>
<hr/>
<Row lg="4">
{studentdetail.map((item)=><Display profile={item}/>)}
 
 </Row>

 <br/><hr/>
 <table class="table">
  <thead>
    <tr> 
      <th scope="col">#</th>
      <th id="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">rollno</th>
      <th scope="col">class</th>
    </tr>
  </thead>
  <tbody>
    {studentdetail.map((item,index)=>{
      return(
        <>
          <tr>
          <td>{index+1}</td>
          <td>{item.id}</td>
           <td>{item.name}</td>
            <td>{item.rollno}</td>
            <td>{item.class}</td>
            <td><Link to={`view/${item.id}`}>View</Link></td>
            <td><Link to={`edit/${item.id}`}>Edit</Link></td>
            <td><Link >Delete</Link></td> 
          </tr>
        </>
      )
    }
    )}
  </tbody>
</table>
 
  </div>
  )
}
