import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/lib/Col'
import Modal from 'react-bootstrap/lib/Modal'
import YouTube from 'react-youtube'

import '../assets/stylesheets/base.scss'

export default class VideoTitle extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  close () {
    console.log('Clicked close')
    this.setState({ showModal: false })
  }

  open () {
    console.log('Clicked open')
    this.setState({ showModal: true })
  }

  render () {
    const opts = {
      height: '400',
      width: '600',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    const modalStyle = {
      'modal-content-bg': 0,
      height: 430
    }
    const posterImageUrl = this.props.poster_image_url
    const title = this.props.title
    const youtubeId = this.props.trailer_youtube_url.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)[2]
    return (
      <Col md={6} lg={4} className='movie-tile text-center' onClick={this.open} >
        <img src={posterImageUrl} width={220} height={342} />
        <h2>{title}</h2>
        <Modal show={this.state.showModal} onHide={this.close} style={modalStyle}>
          <YouTube videoId={youtubeId} opts={opts} />
        </Modal>
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
