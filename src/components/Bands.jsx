import React from 'react'
import Band from './Band'

export default function Bands(props) {

  const renderBands = () => {
    return props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand}/>)
  }

  return (
    <div>
      <h2>Bands</h2>
      <ul>
        {renderBands()}
      </ul>
    </div>
  )
}
