import React from 'react'

const Bands = (props) => {
  console.log(props)
  return(
    <div>
      <li>{props.name}</li>
    </div>
  )
}

export default Bands