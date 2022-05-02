'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Action from 'components/actions'
import Repos from 'components/repos'
import './app-content.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  onHandleSearch,
  onHandleRepos,
  onHandleStarred,
  isFetching,
  isDisabled
}) => (
  <div className='app'>
    <Search onHandleSearch={onHandleSearch} isDisabled={isDisabled} />

    {isFetching && <div>Carregando...</div>}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Action handleRepo={onHandleRepos} handleStarred={onHandleStarred} />}

    {!!repos.length && <Repos
      className='repos'
      title='Repositorios'
      repos={repos}
                       />}

    {!!starred.length && <Repos
      className='starred'
      title='Favoritos'
      repos={starred}
                         />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  onHandleRepos: PropTypes.func.isRequired,
  onHandleStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default AppContent
