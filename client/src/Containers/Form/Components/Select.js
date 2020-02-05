import React from 'react';

const Select = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className={props.className}
        name={props.name}
        onChange={props.handleChange}>
        { props.options.map((opt) => <option key={opt} value={opt} label={opt}>{opt}</option>)}
      </select>
    </>
  )
}

export default Select;