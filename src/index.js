// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

class IconFont extends Component {
  handleClick (event) {
    this.$emit('on-click', event)
  }

  render () {
    return (
      <span style={ iconBlock }>
        {this.props.type === 'icon' ? (
          <i
            onClick={ this.handleClick }
            className={`iconfont icon-${this.props.name}`}
            style={{ color: this.props.color ? `#${this.props.color}` : '', fontSize: this.props.size ? `${this.props.size}px` : '' }}></i>
        ) : (
          <svg
            aria-hidden="true"
            onClick={ this.handleClick }
            style={{ color: this.props.color ? `#${this.props.color}` : '', fontSize: this.props.size ? `${this.props.size}px` : '', width: '1em', height: '1em', verticalAlign: '-0.15em', fill: 'currentColor', overflow: 'hidden' }}>
            <use xlinkHref={`#icon-${this.props.name}`}></use>
          </svg>
        )}
      </span>
    )
  }
}

const iconBlock = {
  margin: 0,
  padding: 0
}

export default IconFont