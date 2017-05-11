import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dot extends Component {
  render () {
    var style = {
      width: this.props.size + '%',
      height: '0%',
      'paddingBottom': this.props.size + '%',
      'borderRadius': '50%',
      top: this.calcTop() + '%',
      // top: this.props.cy + '%',
      left: this.calcLeft() + '%',
      // left: this.props.cx + '%',
      position: 'absolute',
      backgroundColor: this.props.color
    }
    return (
      <div style={style} />
    )
  }

  calcTop () {
    return this.props.cy * ((100 - this.props.size) / 100)
  }
  calcLeft () {
    return this.props.cx * ((100 - this.props.size) / 100)
  }
}

Dot.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

Dot.defaultProps = {
  cx: 0,
  cy: 0,
  size: 5,
  color: 'red'
}
