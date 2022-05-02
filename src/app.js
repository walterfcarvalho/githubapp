'use strict'

import React, { Component } from 'react'
import AppContent from 'components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
      isDisabled: false
    }

    this.onHandleSearch = this.handleSearch.bind(this)
    //  this.handleRepos = this.handleRepos.bind(this )
  }

  handleRepos (tipo) {
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${tipo}`)
      .then(result => {
        this.setState({
          [tipo]: result.map((it) => ({
            link: `https://github.com/${it.full_name}`,
            name: it.name
          }))
        })
      })
  }

  handleSearch (e) {
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      console.log(this)
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
            repos: [],
            starred: []
          })
        }).always(() => this.setState({ isFetching: false }))
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        onHandleSearch={this.onHandleSearch}
        onHandleRepos={(e) => this.handleRepos('repos')}
        onHandleStarred={(e) => this.handleRepos('starred')}
      />
    )
  }
}

export default App
