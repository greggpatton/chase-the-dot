import React, { Component } from 'react'
import Viewport from './Viewport'
import WindowDimensions from './WindowDimensions'

export default class App extends Component {
  render () {
    return (
      <div>
        {/*<WindowDimensions />*/}
        <Viewport />
      </div>
    )
  }
}
