import React from 'react';

const Band = props => {
  // debugger
  return (
    <div>

      <span>{props.band.bandName}</span>
      <button onClick={() => props.deleteBand(props.band.id)}>DELETE</button>


    </div>
  )
}

export default Band;
