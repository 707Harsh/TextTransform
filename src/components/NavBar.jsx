import React from 'react'
import PropTypes from 'prop-types'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
// import { Link } from "react-router-dom";




export default function NavBar(props) {

  const changeBColorGreen = ()=>
  {
    props.changeButtonToGreen();
  }
  const changeBColorBlue = ()=>
  {
    props.changeButtonToBlue();
  }



  return (
    <>
      {/* <Navbar expand="lg" style={{backgroundColor:'#ffe1ea', padding:'8px'}} > */}
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme = {`${props.mode}`} style={{padding:'8px'}}>
        <Container style={{display:'contents'}}>
          {/* <Navbar.Brand><Link to="/" style={{color:'var(--bs-nav-link-color)', textDecoration:'none'}}>{props.title}</Link></Navbar.Brand> */}
          <Navbar.Brand>{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
              {/* <Nav.Link> <Link to="/" style={{color:'var(--bs-nav-link-color)', textDecoration:'none'}}>Home</Link> </Nav.Link> */}
              {/* <Nav.Link> <Link to="/about" style={{color:'var(--bs-nav-link-color)', textDecoration:'none'}}>{props.aboutText}</Link> </Nav.Link> */}
              <Nav.Link> {props.aboutText}</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav className="ms-auto">
            <Form.Control type="text" placeholder="Search" className="mx-2" />
            <Button href="/" variant="outline-success">Search</Button>{' '}
            </Nav> */}
            <div style={{display:props.dots}}>
              <div style={{display:'flex', width:'60px', justifyContent:'space-evenly'}}>
                <Image src="./images/blue.jpg" roundedCircle onClick={changeBColorBlue}/>
                <Image src="./images/green.png" roundedCircle onClick={changeBColorGreen}/>
              </div>
            </div>
              <Form className={`text-${props.mode==='light'?'dark':'light'}`}>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Enable dark mode"
                    onClick={props.toggleMode}
                    />
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

NavBar.propTypes=
{
  title: PropTypes.string,
  aboutText: PropTypes.string
}

NavBar.defaultProps=
{
  title:"Title here",
  aboutText:"About here"
}



