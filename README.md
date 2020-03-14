# react-iconfonts

> A Project For React To Use Iconfont Intelligently

## Installation

```bash
$ npm i -S react-iconfonts
```

```javascript
import IconFont from 'react-iconfonts'
```

## Iconfont

> Upload your icons(SVG) to your icon project you have created and download it from [Iconfont](https://www.iconfont.cn/), unzip `download.zip`.

### FontClass

> Add iconfont.css to your project

```js
// Import css
import './iconfont.css'
```

### Symbol, Svg

> Add iconfont.js to your project

```js
// import js
import './iconfont.js'
```

> Warning: If there is something wrong with `iconfont.js` because of `Eslint`, add this comment to the first line of `iconfont.js`: `// eslint-disable-next-line no-unused-expressions`

## Usage

```javascript
import React from 'react'
import IconFont from 'react-iconfonts'

// import for IconFont usage
import './iconfont.css'
import './iconfont.js'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // this prop is not required if you don't need it
  onHandleClick = event => {
    console.log(event)
  }

  render() {
    return (
      <div>
        <div>
          Hello
          <IconFont
            type='icon'
            name='circle-unchecked'
            color='f00'
            size='30'
            onHandleClick={this.onhandleClick}
          />
          FontIcon
        </div>

        <div>
          Hello
          <IconFont
            type='svg'
            name='circle-unchecked'
            color='f00'
            size='30'
            onHandleClick={this.onHandleClick}
          />
          SvgIcon
        </div>
      </div>
    )
  }
}

export default App

```
