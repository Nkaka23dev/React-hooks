import React, { useRef } from 'react'

export default function UseRef() {
  const inputRef = useRef(null);
 

  const onClick = () => {
    console.log(inputRef)
  }
  return (
    <>
    <input type="text" className='Type anything......' ref={inputRef} />
    <button onClick={onClick}>Submit data now</button>
    </>
  )
}
