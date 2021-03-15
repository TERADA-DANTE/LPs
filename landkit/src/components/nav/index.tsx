import Link from 'next/link'
import Image from 'next/image'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function INav() {
  return (
    <Navbar className="py-4 px-5" expand="sm">
      <Link href="/">
        <a>
          <Navbar.Brand>
            <Image width="86" height="19" alt="brand-logo" src="/img/brand.svg" />
          </Navbar.Brand>
        </a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: 'auto' }}>
          <Nav.Link className="px-3" href="">
            Landing
          </Nav.Link>
          <Nav.Link className="px-3" href="">
            pages
          </Nav.Link>
          <Nav.Link className="px-3" href="">
            Account
          </Nav.Link>
          <Nav.Link className="px-3" href="">
            Documentation
          </Nav.Link>
        </Nav>
        <Button style={{ marginLeft: 'auto' }} size="lg">
          Buy now
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}
