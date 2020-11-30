import './styles/App.css'
import Gallery from './components/Gallery'
import Cart from './components/Cart'

// import files
const fruits = [
  {
    name: 'banana',
    origin: 'fukuoka',
    colors: [
      "#fee402",
      "#fed601",
      "#eab201",
      "#a07501",
      "#483401",
    ]
  },
  {
    name: 'apple',
    origin: 'aomori',
    colors: [
      "#a96562",
      "#ccb8a8",
      "#9ebc99",
      "#4e7851",
      "#1d322b",
    ]
  },
  {
    name: 'cherry',
    origin: 'okinawa',
    colors: [
      "#8e070e",
      "#cd5768",
      "#e892a9",
      "#d8918e",
      "#c3bb10",
    ]
  }
]
function App() {

  return (
    <div className="App">
      <Gallery />
      <Cart props={fruits} />
    </div>
  )
}

export default App
