import { useState } from 'react'
import '../styles/Select.css'

function Select(props) {

  return (
    <div className="Select">
        <select id={props.id}>
        {props.values.map((a,b)=> {return <option value={a} key={b}>{a}</option>})}
        </select>
    </div>
  )
}

export default Select