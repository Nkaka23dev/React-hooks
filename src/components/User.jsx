import React, { useContext } from 'react'
import { AppContext } from './ContextTutorial'

export default function User() {
const {username} = useContext(AppContext)
  return (
    <div>
    <h1 style={{fontSize: "2rem"}}>User: {username}</h1>
    </div>
  )
}
