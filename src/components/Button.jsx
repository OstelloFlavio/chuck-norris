import { useState } from 'react'
import '../styles/Button.css'

function Button({text, variant, callback}) {

  function classRenderer(){
  }

  function clickHandler(){
    if(props.callback && props.variant!=="disabled"){
      props.callback();
    }else{
      classRenderer();
    }
  }

  return (
    <div className="Button">
      <p><button className={"Button" + (props.variant!==undefined ? " disabled" : "")} id={props.id} onClick={clickHandler}>Carica un joke random</button></p>
    </div>
  )
}

export default Button
