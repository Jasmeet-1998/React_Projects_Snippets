import React , {useState} from 'react'
import './App.css';
import {InputGroup, Input, InputGroupAddon, FormGroup, Label} from 'reactstrap';

function App() {
  const mainHeader=()=>{
    return(
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        {
          /*Overlay*/
        }
        <div className="filter"></div>
        <h1 className="display-2 text-center text-white mb-3" style={{zIndex:2}}>
          Books Bay
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <Input
              placeholder='Book Search'/>
            <InputGroupAddon addonType='append'>
              <button color='secondary'>
                <i className='fas fa-search'></i>
              </button>
            </InputGroupAddon>
          </InputGroup>
          <div className="d-flex text-white justify-content-center">
            <FormGroup className='m1-5'>
               <Label for='maxResults'>Max Results</Label>
               <input type='number' id='maxResults' placeholder='Max Results'/>
            </FormGroup>
            <FormGroup className='m1-5'>
               <Label for='startIndex'>Start Index</Label>
               <input type='number' id='startIndex' placeholder='Start Index'/>
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      {mainHeader()}
    </div>
  );
}

export default App;
