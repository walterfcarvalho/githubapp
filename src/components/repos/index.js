'use strict'

import React, { PropTypes } from 'react'

import './repos.css'

const Repos = ({ className, title, repos }) => (
  <ul className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}><a href={repo.link} target='_blank' rel='noreferrer'>{repo.name}</a>  </li>
      ))}

    </ul>
  </ul>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
