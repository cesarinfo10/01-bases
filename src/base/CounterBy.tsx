import React, { useState } from 'react'

interface Props{
    initiaValue?:number
}

interface counterState{
  counter: number,
  clicks: number
}

export const CounterBy = ({ initiaValue = 5 }:Props) => {
    
    const [{counter, clicks}, setCounterState] = useState<counterState>({
      counter: initiaValue,
      clicks: 0
    });

  

    const handleClick = (value: number) =>{
      setCounterState(({counter, clicks}) => ({
          counter: counter + value,
          clicks: clicks + 1
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
