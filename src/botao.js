'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Buttonx = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>{children} </button>
)

Buttonx.propTipes = {
  handleClick: PropTypes.func.isRequired
}

export default Buttonx
