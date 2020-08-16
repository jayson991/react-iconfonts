import React from 'react'

const IconFont = ({name, type, size, color}) => {
  const iconBlock = {
    margin: 0,
    padding: 0,
  }

  const fontStyle = {
    color: color ? `#${color}` : '',
    fontSize: size ? `${size}px` : '',
  }

  const symbolStyle = {
    width: '1em',
    height: '1em',
    color: color ? `#${color}` : '',
    fontSize: size ? `${size}px` : '',
    verticalAlign: '-0.15em',
    fill: 'currentColor',
    overflow: 'hidden',
  }

  return (
    <span style={iconBlock}>
      {type === 'icon' ? (
        <span className={`iconfont icon-${name}`} style={fontStyle}></span>
      ) : (
        <svg aria-hidden='true' style={symbolStyle}>
          <use xlinkHref={`#icon-${name}`}></use>
        </svg>
      )}
    </span>
  )
}

export default IconFont
