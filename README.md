# react-iconfonts

> A Project For React To Use Iconfont Intelligently

## Installation

```bash
npm i -S react-iconfonts
```

```javascript
import IconFont from 'react-iconfonts'
```

## Manual

```html
<!-- Add react.js dependency to your HTML file first -->
<script src="https://unpkg.com/react@16.7.0/umd/react.production.min.js"></script>

<!-- Download `index.js` file from `lib` directory, rename it as 'react-iconfonts.js', and include it to your HTML file -->
<script src="/PATH TO YOUR JS FOLDER/react-iconfonts.js"></script>
```

## Iconfont

> Upload your icons(SVG) to your icon project you have created and download it from [Iconfont](https://www.iconfont.cn/), unzip `download.zip`.

### FontClass

> Add iconfont.css to your project

```html
<!-- Include the iconfont.css stylsheet into your HTML header -->
<head>
  <link rel="stylesheet" href="/PATH TO YOUR ICONFONT FOLDER/iconfont.css" />
</head>
```

or

```js
// Import css
import '/PATH TO YOUR ICONFONT FOLDER/iconfont.css'
```

### Symbol, Svg

> Add iconfont.js to your project

```html
<!-- Include the iconfont.js script into your HTML header -->
<head>
  <script src="/PATH TO YOUR ICONFONT FOLDER/iconfont.js"></script>
</head>
```

or

```js
// import js
import '/PATH TO YOUR ICONFONT FOLDER/iconfont.js'
```

> Warning: If there is something wrong with `iconfont.js` because of `Eslint`, add this comment to the first line of `iconfont.js`: `// eslint-disable-next-line no-unused-expressions`

## Usage

```javascript
import React from 'react'
import './App.css'
import IconFont from 'react-iconfont'
import '/PATH TO YOUR ICONFONT FOLDER/iconfont.css'
import '/PATH TO YOUR ICONFONT FOLDER/iconfont.js'
```

```html
<!-- FontClass -->
<div>
  Hello
  <IconFont type="icon" name="hasSelected" color="f00" size="30" /> FontIcon
</div>
<div>
  Hello
  <IconFont type="icon" name="notSelected" color="f00" size="30" /> FontIcon
</div>

<!-- Symbol, Svg -->
<div>
  Hello
  <IconFont type="svg" name="hasSelected" color="f00" size="30" /> SvgIcon
</div>
<div>
  Hello
  <IconFont type="svg" name="notSelected" color="f00" size="30" /> SvgIcon
</div>
```

Example [Here](https://github.com/jayson991/react-iconfonts/tree/master/example)
