import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Shaheed from './shaheed';
import Function from './function';
import Classes from './classes';
import Test from './test';
import Text2 from './text2';
// import Arrow from './arrow';
import Fun from './fun';
import Samplearrow2 from './samplearrow2';
import Samplearrow from './samplearrow';
import Variable from './variable';
import Array from './array';
import Destructuring from './destructuring';
import Spreadoperator from './spreadoperator';
import Ternary from './ternary';
import Module from './module';
import Classtest from './classtest';
import Xmp from './xmp';
import Rfc from './rfc';
import Rcc from './rcc';
import Props from './props';
import Events from './events';
import Conditional from './conditional';
import List from './list';
import Form from './form';
import Anchor from './anchor';
import Router from './router';
import Mainhome from './mainhome';
import { Route } from 'react-router-dom';


function App() {
  const b="asshh";
  function AX(){
    const b="razzz"
  }
 const stylee={
    color:"red",
    backgroundColor:"grey",
    fontFamily:"serif",
    marginLeft:"250px",
    marginTop:"-110px"
  }
  const stylee1={
    color:"green",
    marginTop:"40px",
    backgroundColor:"yellow",

  }
  return (
    <div>
   {/* <h1>{AX()}{b}</h1>  */}
    

    <div>
    {/* <img src='asbaq.jpg' style={{width:"450px"}}></img>
    <img src='1.jpg' style={{width:"500px",marginLeft:"50px"}}></img>
    <img src='3.jpg' style={{width:"500px"}}></img> */}

      {/* <h1 style={{color:"red",backgroundColor:"orange",textAlign:"center"}}>Mern stack devloper</h1> */}
      </div>
      {/* <h2 style={{marginTop:"50px",marginLeft:"0px",fontFamily:"serif",backgroundColor:"green",width:"200px",height:"50px",style:"bold"}}>Hello world</h2>
      <h2 style={stylee}>asbaq</h2>
      <h2 style={stylee1}>shaheed</h2> */}
      
    {/* <p>good morning......</p> */}
    {/* <Home/><About/><Shaheed/><Function/><Classes/>
    <Test/><Text2/><Samplearrow2/><Samplearrow/><Spreadoperator/> */}
    {/* <Arrow/> */}
    {/* <Fun/>  <Variable/><Array/><Destructuring/>
    <Ternary/><Module/><Classtest/><Xmp/><Rfc/><Rcc/><Props title="properties"/><Events/><Conditional/><List/><Form/>  */}
    {/* <Anchor/> <Mainhome/>*/}   
    

    <Router/> 
    </div>
  );
}

export default App;
