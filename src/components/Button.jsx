import React from 'react';
import '../styles/Button.scss'

const Button = (props) => {
  return (
    <button onClick={props.onButtonPress} className='submit'>{props.children}</button>
  )
}

export default Button;