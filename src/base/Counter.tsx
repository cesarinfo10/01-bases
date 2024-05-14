import React, { useState } from 'react'

interface Props{
    initiaValue?:number
}

export const Counter = ({ initiaValue = 0 }:Props) => {
    
    const [counter, setCounter] = useState(initiaValue);


    const handleClick = () =>{
        setCounter(prev => prev + 1)
    } 

  return (
    <>
    <h1>Counter: { counter }</h1>
    <button onClick={ handleClick }>
        +1
    </button>
        
    </>
  )
}
