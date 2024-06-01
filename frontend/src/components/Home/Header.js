import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../Login/Login'
import { useState } from 'react'


export default function Header() {
  const [show, setShow] = useState(false)
  console.log(show)
  const handleShow = () => {
    setShow(true)

  }
  const handleClose = () => {
    setShow(false)
  }

    return (
      <>

        <Navbar expand="lg" className="bg-body-primary me-3 ">
          <Container fluid>
            <Navbar.Brand href="#">BookPlanet</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/" className='ms-5'>Home</Nav.Link>
                <Nav.Link href="/course" className='ms-5'>Course</Nav.Link>
                <Nav.Link href="/contact" className='ms-5'>Contact</Nav.Link>
                <Nav.Link href="/about" className='ms-5'>About</Nav.Link>

              </Nav>

              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ maxWidth: '30vw' }}
              />
              <Button variant="outline-success" style={{
                backgroundColor: '#FF00BF',
                color: 'white'
              }}
                onClick={handleShow}
              >LogIn
              </Button>


              {show ? <Login show={show} handleClose={handleClose} /> : null}
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </>
    )
  
}

