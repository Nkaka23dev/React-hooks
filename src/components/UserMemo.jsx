import React from 'react'

export default function UserMemo() {
    /**
     You will only need useMomo once you have a function that is doing a complex calculation and then run every time state changes.

     how to use it:

     suppose you have a function 
     ***findThelongestName(parameter){
        some complex calculations.
     };
     and you call it in a div
     <div>{findThelongestName(data)}</div>

     By using useMemo:
     const longName =  useMemo(() => findThelongestName(data), []);
     by this the function findThelongestName will only run once and not run when every state
     state changes.
     * **/ 
  return (
    <div>
       
    UserMemo</div>
  )
}
