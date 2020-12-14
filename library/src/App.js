import "./App.css";

import General from "./components/pages/General/index";

import Parts from "./components/organisms/Parts/index";

const App = () => {
  return (
    <div className="App">
      <General>
        <Parts />
      </General>
    </div>
  );
};

export default App;
