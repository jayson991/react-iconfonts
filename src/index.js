// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

class IconFont extends Component {
  render () {
    const iconBlock = {
      margin: 0,
      padding: 0
    }

    const fontStyle = {
      color: this.props.color ? `#${this.props.color}` : '',
      fontSize: this.props.size ? `${this.props.size}px` : ''
    }

    const symbolStyle = {
      width: '1em',
      height: '1em',
      color: this.props.color ? `#${this.props.color}` : '',
      fontSize: this.props.size ? `${this.props.size}px` : '',
      verticalAlign: '-0.15em',
      fill: 'currentColor',
      overflow: 'hidden'
    }

    return (
      <span style={ iconBlock }>
        {this.props.type === 'icon' ? (
          <span
            className={`iconfont icon-${this.props.name}`}
            style={ fontStyle }
          >
          </span>
        ) : (
          <svg
            aria-hidden="true"
            style={ symbolStyle }
          >
            <use xlinkHref={`#icon-${this.props.name}`}></use>
          </svg>
        )}
      </span>
    )
  }
}

export default IconFont
