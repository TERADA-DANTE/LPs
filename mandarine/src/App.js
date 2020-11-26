// import Layouts
import Container from './layouts/Container'
import ContainerIn from './layouts/ContainerIn'

// import CSS
import './styles/App.css'

// import Components
import Buttons from './components/buttons/Buttons'
import Album from './components/album/Album'
import Nav from './components/Nav/Nav'
import Description from './components/description/Description'

function App() {
  return (
    <div className="App">
      <Container >
        <ContainerIn>
          <Buttons />
          <Album />
        </ContainerIn>
        <ContainerIn>
          <Nav />
          <Description />
        </ContainerIn>
      </Container>
    </div>
  );
}

export default App
