import React from 'react'

export default function Band(props) {
  return (
    <div>
      <li>
      <span><b>Name: </b>{props.band.name} </span>
      <button onClick={() => props.deleteBand(props.band.id)}>Delete</button>
      </li>
    </div>
  )
}
