import React from 'react';

const TextArea = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        rows={5}
        className={props.className}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      ></textarea>
    </>
  )
}

export default TextArea;