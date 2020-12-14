import "./App.css";

import General from "./components/pages/General/index";

import FullPage from "./components/organisms/Full/index";

const App = () => {
  return (
    <div className="App">
      <General>
        <FullPage />
      </General>
    </div>
  );
};

export default App;
