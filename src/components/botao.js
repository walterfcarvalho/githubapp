'use strict'

import React, { PropTypes } from 'react'

const Botao = ({ label, handleClick }) => (
  <button onClick={handleClick}>{label}</button>
)

Botao.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

export default Botao
