import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Dot from './Dot'

export default class Viewport extends Component {
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
    // var style = {
    //   position: 'relative',
    //   backgroundColor: 'grey'
    // }

    // console.log(`${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`)
    // if (document.documentElement.clientWidth <= document.documentElement.clientHeight) {
    //   style.width = '100%'
    //   style.height = '0%'
    //   style.paddingBottom = '100%'
    // } else {
    //   style.width = '0%'
    //   style.height = '100%'
    //   style.paddingRight = '50%'
    //   style.paddingLeft = '50%'
    // }
    //   left: '0px',
    //   right: '0px',
    //   width: '100%',
    //   height: '0%',
    // }
    let style = {
      // position: 'relative',
      position: 'absolute',
      backgroundColor: 'grey',
      height: '100%'
    }

    if (window.innerWidth < window.innerHeight) {
      style.width = '100%'
      style.paddingBottom = '100%'
    } else {
      let v = (window.innerHeight / window.innerWidth * 100)
      style.width = v + '%'
      style.paddingBottom = v + '%'
    }
      // display: 'flex'
    return (
      <Grid style={style}>
        <Dot cx={100} cy={100} size={10} color={'red'} />
      </Grid>
    )
  }
}
