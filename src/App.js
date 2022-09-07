import React, { useContext } from 'react'
import { Context } from './Context'

export default function App() {

  const {counter, changeCounter, reset, sub} = useContext(Context)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: "center",
      width: '100%',
      height: '100vh'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        <div style={{
          fontSize: '3rem'
        }}>count : {counter}</div>
        <button style={{
          cursor: 'pointer',
          width: '300px',
          height: '50px',
          fontSize: '2rem'
        }} onClick={reset}>Reset</button>
        <button style={{
          cursor: 'pointer',
          width: '300px',
          height: '50px',
          fontSize: '2rem'
        }} onClick={changeCounter}>+1</button>
        <button style={{
          cursor: 'pointer',
          width: '300px',
          height: '50px',
          fontSize: '2rem'
        }} onClick={sub}>-1</button>
      </div>
    </div>
  )
}
