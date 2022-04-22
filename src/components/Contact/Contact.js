import React from 'react'
import Footer from '../Footer/Footer'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Contact() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h1 style={{ color: 'white' }}>Contact US</h1>
          <Nav className='ms-auto'>
            <LinkContainer to='/dashboard' >
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about' >
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact' >
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/logout' >
              <Nav.Link>LogOut</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Footer />
    </>
  )
}

export default Contact