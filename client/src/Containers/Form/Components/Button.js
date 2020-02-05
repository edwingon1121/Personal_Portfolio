import React from 'react';

const Button = (props) => {
  return (
    <button
      className={props.className}
      type={props.type}
      disabled={props.disabled}
      onClick={props.action}
    >{props.content}</button>
  )
}
export default Button;