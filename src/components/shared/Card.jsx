import React from 'react'
import propTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    //Conditional styling
    <div className='card' style ={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
    }}>{children}</div>
    // <div className='card reverse'>{children}</div>
  )
}
Card.propTypes = {
    children: propTypes.node.isRequired,
    reverse: propTypes.bool
    }

Card.defaultProps ={
    reverse: false
}

export default Card