import React from 'react'

class IconFont extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
      <span
        style={iconBlock}
        onHandleClick={this.props.onHandleClick ? this.props.onHandleClick : () => {}}
      >
        {this.props.type === 'icon' ? (
          <span className={`iconfont icon-${this.props.name}`} style={fontStyle}></span>
        ) : (
          <svg aria-hidden='true' style={symbolStyle}>
            <use xlinkHref={`#icon-${this.props.name}`}></use>
          </svg>
        )}
      </span>
    )
  }
}

export default IconFont
