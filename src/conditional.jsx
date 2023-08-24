import React from 'react'

export default function conditional() {


    function Missedgoal(){
        return <h1>missed</h1>
    }
    function Madegoal(){
        return<h1>goal</h1>
    }
    function Goal(probs){
        const isGoal=probs.isGoal;
        if (isGoal){
            return <Madegoal/>;
        }
        else{
            return <Missedgoal/>;

        }
        }
    

  return (
    <div>
        <hr/>
        <h1 >---------conditional start---------</h1>
        <Goal isGoal={false}/>

        <h1>---------conditional end---------</h1>
        
        </div>
  )
}
