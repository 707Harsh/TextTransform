import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


export default function TextForm(props) {
  const [text, setText] = useState("Enter the text to convert....");

  const handleUC = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLC = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCC = () => {
    let newText = "";
    let arr = text.split(' ');
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      newText = newText + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
    }
    setText(newText);
  }

  const handleIC = () => {
    let newText = "";
    let arr = text.split(' ');
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      for (let j = 0; j < word.length; j++) {
        if (word[j] == word[j].toUpperCase())
          newText = newText + word[j].toLowerCase();
        else
          newText = newText + word[j].toUpperCase();
      }
      newText = newText + " ";
    }
    setText(newText);
  }

  const handleAC = () => {
    let check = confirm("To start with Capital letter press OK or else press CANCEL");
    let newText = "";
    if (check) {
      for (let i = 0; i < text.length; i++) {
        if (i & 1)
          newText = newText + text[i].toLowerCase();
        else
          newText = newText + text[i].toUpperCase();
      }
    }
    else {
      for (let i = 0; i < text.length; i++) {
        if (i & 1)
          newText = newText + text[i].toUpperCase();
        else
          newText = newText + text[i].toLowerCase();
      }
    }
    setText(newText);
  }

  const handleC = ()=>
  {
    props.toggleVisible();
  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  }


  const NoClicked = ()=>
  {
    props.toggleNoVisible();
  }
  const YesClicked = ()=>
  {
    props.toggleNoVisible();
    setText("");
  }

  const charac = text.length - (text.split(' ').length - 1);
  var wordCount;
  var previewText;
  var realText = text.replace(/\s+/g," ");
  if(realText.charAt(realText.length-1) === ' ')
  wordCount = realText.split(' ').length-2;
  else
  wordCount = realText.split(' ').length-1;

  if(realText===' ' || realText.length===0)
  previewText='Enter something in the textbox above to preview it here';
  else
  previewText=realText;

  return (
    <>
    {[
        'warning'
      ].map((variant) => (
        <Alert key={variant} variant={variant} style={{display:props.visible}} >
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
            <strong>ALERT!!</strong>  Do you really want to clear the text...?
            </div>
            <div>
            <Button variant="warning" onClick={YesClicked}>YES</Button>{' '}
            <Button variant="warning" onClick={NoClicked}>NO</Button>
            </div>
          </div>
        </Alert>
      ))}
      <h4 style={{ display: 'flex', color: props.mode==='light'?'black':'white' }} >{props.heading}</h4>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={10} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#212529',color: props.mode==='light'?'black':'white'}}/>
        </Form.Group>
      </Form>
      <div style={{ display: 'flex', justifyContent:'space-between'}}>
        <div>
          <Button variant={props.bColor} style={{ margin: '4px 4px 4px 0px' }} onClick={handleUC} >TO UPPERCASE</Button>{''}
          <Button variant={props.bColor} style={{ margin: '4px 4px 4px 0px' }} onClick={handleLC}>to lowercase</Button>{''}
          <Button variant={props.bColor} style={{ margin: '4px 4px 4px 0px' }} onClick={handleCC}>To Capitalized Case</Button>{''}
          <Button variant={props.bColor} style={{ margin: '4px 4px 4px 0px' }} onClick={handleIC}>To iNvErSe cAsE</Button>{''}
          <Button variant={props.bColor} style={{ margin: '4px 4px 4px 0px' }} onClick={handleAC}>To aLtErNaTiNg cAsE</Button>{''}
        </div>
        <div>
          <Button variant={props.bColor} style={{ margin: '4px 0px 4px 4px' }} onClick={handleC} >Clear</Button>{''}
        </div>
      </div>
      <div style={{color: props.mode==='light'?'black':'white'}}>
      <h4 style={{margin:'30px 0px 0px 0px'}}>Your text summary</h4>
      <p>{realText.length===0?0:wordCount+1} words and {charac} characters</p>
      <h4>Preview</h4>
      <p>{previewText}</p>
      </div>
    </>
  )
}
