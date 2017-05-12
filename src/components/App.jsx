import React, { Component } from 'react'
import Viewport from './Viewport'
import WindowDimensions from './WindowDimensions'
import GameLoop from './GameLoop'

export default class App extends Component {
  render () {
    return (
      <div>
        {/*<WindowDimensions />*/}
        <GameLoop />
        {/*<Viewport />*/}
      </div>
    )
  }
}
