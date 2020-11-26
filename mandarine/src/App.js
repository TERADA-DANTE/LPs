// import Layouts
import Container from './layouts/Container'
import ContainerIn from './layouts/ContainerIn'
import Content from './layouts/Content'
// import CSS
import './styles/App.css'

// import Components
import Buttons from './components/buttons/Buttons'
import Nav from './components/Nav/Nav'
import Description from './components/description/Description'
import Gallery from './components/album/Gallery'
import Player from './components/album/Player'
import Subscribe from './components/description/Subscribe'

function App() {
  return (
    <div className="App">
      <Container >
        <ContainerIn>
          <Buttons />
          <Content type={'Album'}>
            <Gallery />
            <Player />
          </Content>
        </ContainerIn>
        <ContainerIn>
          <Nav items={['Home', 'About', 'Contact', 'F&A']} />
          <Content type={'Description'}>
            <Description />
            <Subscribe />
          </Content>
        </ContainerIn>
      </Container>
    </div>
  );
}

export default App
