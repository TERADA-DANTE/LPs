import "./App.css"

import General from "./components/pages/General/index"

import Test from "./components/organisms/Test/index"

const App = () => {
  return (
    <div className="App">
      <General>
        <Test />
      </General>
    </div>
  )
}

export default App
