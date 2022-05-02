'use strict'

import React, { propTypes, PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img width='100px' height='100px' src={userinfo.photo} />
    <h1>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositorios: {userinfo.repos}</li>
      <li>Seguindo: {userinfo.followers}</li>
      <li>Seguidores: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
  })
}

export default UserInfo
