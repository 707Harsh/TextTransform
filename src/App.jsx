import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom';
// import ALert from './components/Alert';
 




function App() {
  const [mode, setMode] = useState("light");
  const [display, setDisplay] = useState("none");
  const [displayDots, setDisplayDots] = useState("none");
  const [bColor, setBColor] = useState("primary");
  
  
  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      setDisplayDots("");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setDisplayDots("none");
    }
  }

  const toggleVisible = ()=>
  { 
    setDisplay("");
  }
  const toggleNoVisible = ()=>
  {
    setDisplay("none");
  }
  const changeButtonToGreen = ()=>
  {
    setBColor("success");
  }
  const changeButtonToBlue = ()=>
  {
    setBColor("primary");
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <NavBar title="TextTransform" aboutText="About" mode={mode} toggleMode={toggleMode} dots={displayDots} changeButtonToGreen={changeButtonToGreen} changeButtonToBlue={changeButtonToBlue}/>
        {/* <ALert visible={display} toggleNoVisible={toggleNoVisible} toggleYesVisible={toggleYesVisible}/> */}
        <br />

        {/* <Routes>
          <Route exact path="/" element=
          { */}
          <Container>
          <TextForm heading="Enter your text below:" mode={mode} toggleVisible={toggleVisible} visible={display} toggleNoVisible={toggleNoVisible} bColor={bColor}/>
          </Container>
          {/* }/>
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
