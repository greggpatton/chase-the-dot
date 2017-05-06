import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class VideoTitleContainer extends Component {
  render () {
    const movies = this.props.movies
    return (
      <div>
        <pre>
          {JSON.stringify(movies, null, 4)}
        </pre>
      </div>
    )
  }
}

VideoTitleContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  children: PropTypes.object
}

function mapStateToProps (state, ownProps) {
  return {
    movies: state
  }
}

export default connect(mapStateToProps)(VideoTitleContainer)
