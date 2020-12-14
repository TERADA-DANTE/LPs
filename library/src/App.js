import { useEffect } from "react";
import "./App.css";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true,
};
const App = () => {
  useEffect(() => {
    const $ = (selector) => document.querySelector(selector);
    window.onload = function () {
      console.log($("#fullpage"));
      $("#fullpage").fullpage();
    };
  }, []);
  return (
    <div className="App">
      <div id="fullpage">
        <div className="section">page 1</div>
        <div className="section">page 2</div>
        <div className="section">page 3</div>
        <div className="section">page 4</div>
      </div>
    </div>
  );
};

export default App;
