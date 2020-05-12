import React, { useState } from 'react';
 import Accordion from "../../components/accordion/accordion"
import "./sideBar.css";

const propertiesInputs = new Map([
  ['background', 'color'],
  ['margin', 'number'],
  ['color', 'color'],
  ['padding', 'number'],
  ['borderRadius', 'number'],
  ['fontSize', 'number'],
]);

const SideBar = ({changeProperties, changeComponent, components}) => {
  const [properties, setProperties] = useState({
    background: '#454545',
    color: '#000',
    margin: '20px',
    fontSize: '20px',
    borderRadius: '4px',
    padding: '5px',
  });
  changeProperties(properties);
  const setValue = e => {
    const newValue = {
      ...properties,
      [e.target.name]: e.target.type === 'number' ? e.target.value + 'px' : e.target.value,
    };
    console.log(newValue);
    setProperties(newValue);
    changeProperties(newValue);
  }
  const setComponent = (e) => {
    changeComponent(e.target.innerText);
  };
  const elements = [];
  propertiesInputs.forEach((v, k) => {
    elements.push(
      <div className="form-input" >
        <label>{k}</label>
        <input type={v} name={k} value={properties[k] && v === 'number' ? properties[k].replace('px', '') : properties[k] } onChange={setValue} />
      </div>
    );
  });
  return (
    <div className="sidebar">
      <div className="app">
        <h1>components</h1>   
        <Accordion>
          <div label="button"  isOpen>
            <div>
              <div className="form-input"   >
                <label>Background:</label>
                <input name="background"  onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>Text color:</label>
                <input type="color"  name="color"  onChange={setValue} />
              </div>
              <div className="form-input">
                <label>padding:</label>
                <input type="number"  name="padding"  onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>font-size:</label>
                <input type="number"   name="font-size" />
              </div>
              <div className="form-input"  >
                <label> border-radius:</label>
                <input  type="number"  name="borderradius"  onChange={setValue} />
              </div>
              <div className="form-input" >
                <label> border:</label>
                <input type="number"   name="border" />
              </div>
              <div className="form-input" >
                <label>margin:</label>
                <input type="number"   name="margin" />
              </div>
            </div>
            

          </div>
          <div label="input">
            <div>
              <div className="form-input"   >
                <label>Background:</label>
                <input name="background" onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>Text color:</label>
                <input name="color"  onChange={setValue} />
              </div>
              <div className="form-input">
                <label>padding:</label>
                <input name="padding"  onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>font-size:</label>
                <input name="font-size" />
              </div>
              <div className="form-input"  >
                <label> border-radius:</label>
                <input name="borderradius" onChange={setValue} />
              </div>
              <div className="form-input"   >
                <label> border:</label>
                <input name="border" />
              </div>
              <div className="form-input" >
                <label>margin:</label>
                <input name="margin" />
              </div>
            </div>
           
          </div>  
        </Accordion>
       

      </div>

    </div>
  )
}

export default SideBar;