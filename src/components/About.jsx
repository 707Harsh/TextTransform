import React from 'react'
import Container from 'react-bootstrap/Container';

export default function About(props) {
  return (
    <>
    <Container>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>About Us</h1>
    </Container>
    </>
  )
}
