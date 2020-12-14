import { useEffect } from "react";
import "./App.css";
import fullpage from "fullpage.js";
const App = () => {
  useEffect(() => {
    new fullpage("#fullpage", {
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
    });

    // //methods
    // fullpage_api.setAllowScrolling(false);
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
