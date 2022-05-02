'use strict'

import React, { PropTypes } from 'react'
import Botao from '../botao'
import './actions.css'

const Action = ({ handleRepo, handleStarred }) => (
  <div className='actions'>
    <Botao label='Ver repositorios!' handleClick={handleRepo} />
    <Botao label='Ver Favoritos!' handleClick={handleStarred} />
  </div>
)

Action.defaultProps = {
  handleStarred: PropTypes.func.isRequired,
  handleRepo: PropTypes.func.isRequired
}

export default Action
