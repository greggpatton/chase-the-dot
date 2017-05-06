import React, { Component } from 'react'
import Navigation from './Navigation'
import VideoTitleContainer from './VideoTitleContainer'

export default class App extends Component {
  // state = {  }
  render () {
    return (
      <div>
        <Navigation />
        <VideoTitleContainer />
      </div>
    )
  }
}

// import React from 'react'
// import PropTypes from 'prop-types'

// import '../assets/stylesheets/base.scss'

// const App = ({ name }) => {
//   return (
//     <h1>Hello there {name}!</h1>
//   )
// }

// App.propTypes = {
//   name: PropTypes.string
// }

// export default App
