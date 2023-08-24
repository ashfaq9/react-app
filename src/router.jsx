import React from 'react'
import img from './2.JPG'
import img2 from './5.jpeg'
import img3 from './3.jpg'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mainhome from'./mainhome';
import Classes from './classes';
import Arrow from './arrow';
import About from './about';
import Shaheed from './shaheed';
import Function from './function';
import Test from './test';
import Text2 from './text2';
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
import Exp from './exp';
import Classmain from './classmain';
import Classinheritance from './classinheritance';
import Classmethods from './classmethods';
import Mypage from './mypage';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import Propsdrill from './propsdrill';
import Usecontext from './usecontext';
import Rigistration from './rigistration';
import AutoComplete from './AutoComplete/autoComplete';
import ComboBox from './AutoComplete/autoComplete';
import CountrySelect from './AutoComplete/CountrySelect';
import Grouped1 from './Grouped1';
import Edit from './Edit';
import View from './view';
import Aboutt from './clone/aboutt';
import Anchorex from './clone/anchorex';
import Arrayy from './clone/arrayy';
import Arroww from './clone/arroww';
export default function router() {

  const  studentdetail=[
    {
      id:201,
        name:"razi",
        rollno:19856,
        class:"BCA",
        image:<img src={img} class="card-img-top" alt="asbaq"/>
    },{
      id:202,
      name:"shahhed",
      rollno:19877,
      class:"BA",
      image:<img src={img2} class="card-img-top" alt="asbaq"/>
    },{
      id:203,
      name:"asif",
      rollno:19887,
      class:"sslc",
      image:<img src={img3} class="card-img-top" alt="asbaq"/>
    }

]

  return (
    <div>
       {/* <h1>.......................router start............................</h1> */}
        
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Mainhome/>}></Route>
        <Route exact path='/classmain' element={<Classmain/>}></Route>

        <Route exact path='/classmain/classes' element={<Classes/>}></Route>
       
        <Route exact path='/arrow' element={<Arrow/>}></Route>
        
        <Route exact path='/anchor' element={<Anchor/>}></Route>
        <Route exact path='/form' element={<Form/>}></Route>
        <Route exact path='/list' element={<List/>}></Route>
        <Route exact path='/conditional' element={<Conditional/>}></Route>
        <Route exact path='/events' element={<Events/>}></Route>
        <Route exact path='/props' element={<Props/>}></Route>
        <Route exact path='/rfc' element={<Rfc/>}></Route>
        <Route exact path='/rcc' element={<Rcc/>}></Route>
        <Route exact path='/xmp' element={<Xmp/>}></Route>
        <Route exact path='/classtest' element={<Classtest/>}></Route>
        <Route exact path='/module' element={<Module/>}></Route>
        <Route exact path='/ternary' element={<Ternary/>}></Route>
       
        <Route exact path='/spreadoperator' element={<Spreadoperator/>}></Route>
        <Route exact path='/destructuring' element={<Destructuring/>}></Route>
        <Route exact path='/array' element={<Array/>}></Route>
        <Route exact path='/variable' element={<Variable/>}></Route>
        <Route exact path='/samplearrow' element={<Samplearrow/>}></Route>
        <Route exact path='/samplearrow2' element={<Samplearrow2/>}></Route>
        <Route exact path='/fun' element={<Fun/>}></Route>
        <Route exact path='/classes'element={<Classes/>}></Route>
        <Route exact path='/function' element={<Function/>}></Route>
        <Route exact path='/shaheed' element={<Shaheed/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/test' element={<Test/>}></Route>
        <Route exact path='/mainhome' element={<Mainhome/>}></Route>
        <Route exact path='/exp' element={<Exp/>}></Route>
        <Route exact path='Usestate'element={<Usestate/>}></Route>
        <Route exact path='/classmain/classinheritance' element={<Classinheritance/>}></Route>
        <Route exact path='/classes/classmethods' element={<Classmethods/>}></Route>
<Route exact path='/mypage'element={<Mypage/>}></Route>
<Route exact path='/Useeffect' element= {<Useeffect/>}></Route>
<Route exact path='/mypage/array' element={<Array/>}></Route>
<Route exact path='/propsdrill' element={<Propsdrill/>}></Route>
<Route exact path='/usecontext' element={<Usecontext/>}></Route>
<Route exact path='/Usestate/rigistration' element={<Rigistration studentdetail={studentdetail}/>}></Route>
<Route exact path='/autoComplete'element={<AutoComplete/>}></Route>
<Route exact path='/ComboBox'element={<ComboBox/>}></Route>
<Route exact path='/CountrySelect'element={<CountrySelect/>}></Route>
<Route exact path='/Grouped1'element={<Grouped1/>}></Route>
<Route exact path='/Edit'element={<Edit/>}></Route>
<Route exact path='/Usestate/rigistration/view/201'element={<View studentdetail={studentdetail}/>}></Route>

<Route exact path='/aboutt' element={<Aboutt/>}></Route>
<Route exact path='/aboutt/anchorex' element={<Anchorex/>}></Route>
<Route exact path='/aboutt/arrayy' element={<Arrayy/>}></Route>
<Route exact path='/aboutt/arroww' element={<Arroww/>}></Route>

        </Routes></BrowserRouter>

     
        
       </div>
  )
}
