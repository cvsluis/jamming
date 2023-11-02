import React from 'react';
import '../styles/Button.scss'

const Button = (props) => {
  return (
    <button className='submit'>{props.children}</button>
  )
}

export default Button;