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
  handlePagination
}) => (
  <div className='app'>
    <Search onHandleSearch={onHandleSearch} isDisabled={isFetching} defaultValue ={'walterfcarvalho'} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Action handleRepo={onHandleRepos} handleStarred={onHandleStarred} />}

    <div>
      {!!repos.repos.length && <Repos
        className='repos'
        title='Repositorios'
        repos={repos}
        handlePagination = {(clicked) => handlePagination('repos', clicked) }
                        />}

      {!!starred.repos.length && <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
        handlePagination = {(clicked) => handlePagination('starred', clicked) }
                          />}
    </div>

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.object.isRequired,
  starred: PropTypes.object.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  onHandleRepos: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  onHandleStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default AppContent
