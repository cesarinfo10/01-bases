import React, { useState } from 'react'

interface Props{
    initiaValue?:number
}

export const CounterBy = ({ initiaValue = 5 }:Props) => {
    
    const [counterState, setCounterState] = useState({
      counter: initiaValue,
      clicks: 0
    });

    const {counter, clicks }=counterState;
    const handleClick = (value: number) =>{
      setCounterState(prev => ({
          counter: prev.counter + value,
          clicks: prev.clicks + 1
        }))
    } 

  return (
    <>
    <h1>CounterBy: { counter }</h1>
    <h1>Clicks: { clicks }</h1>

    <button onClick={ () =>handleClick(1) }>
        +1
    </button>

    <button onClick={ () =>handleClick(5) }>
        +5
    </button>
        
    </>
  )
}
