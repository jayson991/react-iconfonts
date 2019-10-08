import React from 'react';
import './App.css';
import './assets/icons/iconfont.css';
import './assets/icons/iconfont.js';
import IconFont from 'react-iconfonts';

function App() {
  return (
    <div className="App">
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
