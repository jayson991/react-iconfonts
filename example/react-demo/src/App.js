import React from "react";
import "./App.css";
import "./assets/icons/iconfont.css";
import "./assets/icons/iconfont.js";
import IconFont from "react-iconfonts";

function App() {
  return (
    <div className="App">
      <div>
        Hello
        <IconFont type="icon" name="circle-unchecked" color="f00" size="30" />
        FontIcon
      </div>
      <div>
        Hello
        <IconFont type="svg" name="circle-unchecked" color="f00" size="30" />
        SvgIcon
      </div>

      <div>
        Hello
        <IconFont type="icon" name="circle-checked" color="f00" size="30" />
        FontIcon
      </div>
      <div>
        Hello
        <IconFont type="svg" name="circle-checked" color="f00" size="30" />
        SvgIcon
      </div>
      <div>
        Hello
        <IconFont type="icon" name="tick-checked" color="f00" size="30" />
        FontIcon
      </div>
      <div>
        Hello
        <IconFont type="svg" name="tick-checked" color="f00" size="30" />
        SvgIcon
      </div>
    </div>
  );
}

export default App;
