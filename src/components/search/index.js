'use strict'

import React, { PropTypes } from 'react'
import './search.css'

const Search = ({ onHandleSearch, isDisabled }) => (
/*     <div className={style.search}> */
  <div className='search'>
    <input
      type='search'
      placeholder='Nome do usuario '
      disabled={isDisabled}
      onKeyUp={onHandleSearch}
    />
  </div>
)

Search.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
