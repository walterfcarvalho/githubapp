'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor ({ time }) {
    super()
    this.state = {
      time: 0
    }
    this.timer
  }

  componentWillUpdate (nextProps, nextSate) {
    console.log('timmer componentWillUpdate ', this.nextProps, this.nextSate)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('timmer componentDidUpdate ', this.prevProps, this.prevState)
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
    clearInterval(this.timer)
    this.setTime(nextProps.time)
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  componentDidMount () {
    this.setTime(1)
  }

  setTime (newTimw) {
    this.timer = setInterval(
      () => this.setState({
        time: this.state.time + newTimw
      }),
      1000
    )
  }

  render () {
    return <div> Timer: {this.state.time} </div>
  }
}

export default Timer
