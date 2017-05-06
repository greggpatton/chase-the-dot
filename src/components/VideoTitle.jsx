import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/lib/Col'

import '../assets/stylesheets/base.scss'

export default class VideoTitle extends Component {
  render () {
    const posterImageUrl = this.props.poster_image_url
    const title = this.props.title
    const youtubeId = this.props.trailer_youtube_url.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)[2]
    return (
      <Col md={6} lg={4} className='movie-tile text-center' data-trailer-youtube-id={youtubeId} data-toggle='modal' data-target='#trailer' >
        <img src={posterImageUrl} width={220} height={342} />
        <h2>{title}</h2>
      </Col>
    )
  }
}

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string,
  poster_image_url: PropTypes.string.isRequired,
  trailer_youtube_url: PropTypes.string.isRequired
}
