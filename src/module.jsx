import React from 'react'
//inline export 
import {name,age,Message2,Msg4,Profile} from './Modules'
//group export
import  {n,a,Message3} from './Modules'
import Abc from  './defaultexport'
import Xyz from './raazi'


export default function modules() {
  return (
    <div><h1>{name}:{age}<br/>{n}:{a}
    <br/>default export : <Abc/><br/>
    <Msg4/>,{a}
    inline export : <Message2/>,{name}:{age}<br/>{n}:{a}<br/>
    grouped export : <Message3/><Xyz/></h1>
    </div>
  )
}
