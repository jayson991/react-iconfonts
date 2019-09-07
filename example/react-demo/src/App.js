import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './assets/icons/iconfont.css';
import './assets/icons/iconfont.js';
import IconFont from 'react-iconfonts';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        Hello <IconFont type="icon" name="hasSelected" color="f00" size="30" /> FontIcon
      </div>
      <div>
        Hello <IconFont type="icon" name="notSelected" color="f00" size="30" /> FontIcon
      </div>

      <div>
        Hello <IconFont type="svg" name="hasSelected" color="f00" size="30" /> SvgIcon
      </div>
      <div>
        Hello <IconFont type="svg" name="notSelected" color="f00" size="30" /> SvgIcon
      </div>
    </div>
  );
}

export default App;
