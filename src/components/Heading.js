import React from 'react'

const Heading = (props) => {

  return (
    props.as == undefined
    ?
    <h1 className={props.className}>Heading</h1>
    :
    <props.as className={props.className}>Heading</props.as>
  )
}

export default Heading