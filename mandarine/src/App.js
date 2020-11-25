// import Layouts
import Container from './layouts/Container'
import ContainerIn from './layouts/ContainerIn'

// import CSS
import './styles/App.css'

// import Components
import Buttons from './components/header/buttons/Buttons'
import Album from './components/header/album/Album'
import Nav from './components/body/Nav/Nav'
import Description from './components/body/description/Description'

function App() {
  return (
    <div className="App">
      <Container >
        <ContainerIn>a</ContainerIn>
        <ContainerIn>b</ContainerIn>
        {/* <ContainerIn className={'Header'}><div className='test2'>test sample2</div></ContainerIn> */}
        {/* <ContainerIn>
          <Buttons />
          <Album />
        </ContainerIn>
        <ContainerIn>
          <Nav />
          <Description />
        </ContainerIn> */}
      </Container>
    </div>
  );
}

export default App
