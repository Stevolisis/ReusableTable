import {React,useState} from 'react';


export default function Testingwthreact(){
    const [countervalue,setCountervalue]=useState(0)
    const [counterrange,setCounterrange]=useState(1)


    const style={
       textAlign:'center'
    }

    return(
    <>
    <div style={style}>
    <h2 data-testid='header' >My Counter</h2>
    <h2 data-testid='counter'
     className= {countervalue >= 100 ? 'green' : '' || countervalue <= -100 ? 'red' : ''}
    >{countervalue}</h2>

     <button
     onClick={(e)=>setCountervalue(countervalue-counterrange)}
     data-testid='subtract-btn'
     >-</button>

     <input type='number' value={counterrange}
     onChange={(e)=>setCounterrange(parseInt(e.target.value))}
      style={style} data-testid='input'/>

     <button
     onClick={(e)=>setCountervalue(countervalue+counterrange)}
      data-testid='add-btn'>+</button>

        </div>
    </>
    )
}