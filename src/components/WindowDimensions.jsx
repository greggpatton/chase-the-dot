import React, { Component } from 'react'

export default class WindowDimensions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    }
  }

  componentDidMount () {
    this.handleResize = () => {
      this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      })
    }

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <span>
        {this.state.windowWidth} x {this.state.windowHeight}
      </span>
    )
  }
}
