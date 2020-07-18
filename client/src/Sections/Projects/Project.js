import React from 'react'

const Project = (props) => {
  return (
    <h1 style={{ "color": "yellow", "textAlign": "center" }}>{props.match.params.name}</h1>
  )
}

export default Project; 