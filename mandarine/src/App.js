// import Packages
import { useState } from 'react'
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

//import files
import data from './assets/data/data.json'

function App() {
  /*Lazy loading ? */
  const [index, setIndex] = useState(0)
  const l = data.length
  const handleClick = (dir) => setIndex((index + l + dir) % l)

  const { type, name, img, desc } = data[index]
  return (
    <div className="App">
      <Container >
        <ContainerIn>
          <Buttons props={['list', 'search', null]} />
          <Content type={'Album'}>
            <Gallery props={[name, img]} />
            <Player props={[index, l]} onClick={(dir) => handleClick(dir)} />
          </Content>
        </ContainerIn>
        <ContainerIn>
          <Nav items={['Home', 'About', 'Contact', 'F&A']} />
          <Content type={'Description'}>
            <Description props={[type, name, desc]} />
            <Subscribe />
          </Content>
        </ContainerIn>
      </Container>
    </div>
  );
}

export default App
