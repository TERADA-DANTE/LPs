import Head from 'next/head'
import Nav from '../src/components/nav/index'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main">
        <Row className="px-5">
          <Col className="px-5">
            <Nav />
          </Col>
        </Row>
      </Container>
    </>
  )
}
