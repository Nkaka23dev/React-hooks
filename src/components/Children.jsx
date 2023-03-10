import React, { useRef } from 'react'
import Parent from './Parent'

export default function Children() {
    const buttonRef = useRef(null);
  return (
    <div>
    <button onClick={() => {buttonRef.current.alterShowtext()}} style={{padding: "1rem 3rem", fontSize:'2rem'}}>Children Button</button>
    <Parent ref={buttonRef}/>  
    </div>
  )
}
