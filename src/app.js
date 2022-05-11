'use strict'

import React, { Component } from 'react'
import AppContent from 'components/app-content'
import ajax from '@fdaciuk/ajax'

const initialRepoState = {
  repos:[],
  pagination:{
    total: 1,
    activePage:1
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: undefined,
      repos: initialRepoState,
      starred: initialRepoState,
      isFetching: false
    }
    this.perPage = 3
    this.onHandleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl(type, page) {
    const userName = this.state.userinfo ? `${this.state.userinfo.login}` : '' 
    const internalType = type ?  `${type}` : '' 
    return `https://api.github.com/users/${userName}/${internalType}?per_page=${this.perPage}&page=${page}`
  }

  getRepos (type, page = 1 ) {
    console.log(type)
    ajax().get( this.getGitHubApiUrl(type, page)) 
      .then(result => {
        this.setState({
          [type]: { 
            repos: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            })),
            pagination: this.state[type].pagination
          }
        })
      })
  }

  handleSearch (e) {
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(`https://api.github.com/users/${e.target.value}`)
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              login: result.login
            },
            repos: initialRepoState,
            starred: initialRepoState
          })
        }).always(() => this.setState({ isFetching: false }))
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        onHandleSearch={this.onHandleSearch}
        onHandleRepos={(e) => this.getRepos('repos')}
        onHandleStarred={(e) => this.getRepos('starred')}
        handlePagination={ (type, page) => this.getRepos(type, page) } 
      />
    )
  }
}

export default App
