import React from 'react';

const Input = (props) => {
  return (
    <div className='input-element'>
      <label htmlFor={props.name} name={props.name}>
        { props.required ? <span className="required-span">*</span> : ""} {props.label}
      </label>
      <input
         id={props.name}
         name={props.name}
         className={props.className}
         type={props.type}
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.handleChange}
      />
    </div>
  )
}
export default Input;