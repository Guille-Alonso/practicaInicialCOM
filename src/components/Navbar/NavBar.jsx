import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({links}) => {
  return (
    <>
    
     <Navbar bg="dark" variant="dark">
    <Container>
       
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        {
            links.map((item,index)=>(
                <Nav.Link key={index} href="#home">{item}</Nav.Link>
            )

            )
        }
          
         
       
      </Nav>
    </Container>
  </Navbar>
    </>

  )
}

export default NavBar