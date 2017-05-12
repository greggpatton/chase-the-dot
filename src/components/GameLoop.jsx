import React, { Component } from 'react'
import Viewport from './Viewport'
import Timer from '../util/Timer'

export default class GameLoop extends Component {
  constructor (props) {
    super(props)

    this.state = { delta: 0 }
  }

  componentDidMount () {
    this.lastNow = window.performance.now()

    this.ticker = Timer.setInterval(() => {
      let now = window.performance.now()

      this.setState({ delta: now - this.lastNow })

      this.lastNow = now
    }, 1)
  }

  componentWillUnmount () {
    Timer.clearInterval(this.ticker)
  }

  render () {
    return (
      <div>
        <Viewport />
        <h1 style={{ top: 0, left: 0, position: 'absolute', zIndex: 99 }}>FPS: {Math.floor(1000 / this.state.delta)}</h1>
      </div>
    )
  }
}
