import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dot extends Component {
  render () {
    var style = {
      width: this.props.size + 'px',
      height: this.props.size + 'px',
      // 'paddingBottom': this.props.size + 'px',
      'borderRadius': '50%',
      top: this.calcTop() + 'px',
      // top: this.props.cy + 'px',
      left: this.calcLeft() + 'px',
      // left: this.props.cx + 'px',
      position: 'absolute',
      backgroundColor: this.props.color
    }
    return (
      <div style={style} />
    )
  }

  calcTop () {
    return this.props.cy - (this.props.size / 2)
    // return this.props.cy * ((100 - this.props.size) / 100)
  }
  calcLeft () {
    return this.props.cx - (this.props.size / 2)
    // return this.props.cx * ((100 - this.props.size) / 100)
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
