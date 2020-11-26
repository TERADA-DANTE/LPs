// import Layouts
import Container from './layouts/Container'
import ContainerIn from './layouts/ContainerIn'
import Content from './layouts/Content'
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
          <Content className={'Album'}>
            <Album />
          </Content>
        </ContainerIn>
        <ContainerIn>
          <Nav items={['Home', 'About', 'Contact', 'F&A']} />
          <Content className={'Description'}>
            <Description />
          </Content>
        </ContainerIn>
      </Container>
    </div>
  );
}

export default App
