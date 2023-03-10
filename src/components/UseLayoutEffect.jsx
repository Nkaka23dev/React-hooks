import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffect() {
    /**
     The useeffect is called after all other atuff rendered on the page, on the contarast, the useLayoutEffect run before anything is rendered.
     * **/
    useEffect(() => {
        console.log("hello Effect")
    })
    useLayoutEffect(() => {
        console.log("UseLayout Effet")
    })
  return (
    <div>UseLayoutEffect</div>
  )
}
