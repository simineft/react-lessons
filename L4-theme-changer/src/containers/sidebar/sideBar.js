import React, { useState } from 'react';
import { connect } from "react-redux";
import { changeStyle } from "../../actions";
// import Accordion from "../../components/accordion/accordion"
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
          <ul>
            {components.map(c => {
              return <li onClick={setComponent}> {c} </li>
            })}
          </ul>
          <div label="button">
            <div>
              {elements}
              {/* {propertiesInputs.map((property) => {
                return <div className="form-input" >
                  <label>{property}</label>
                  <input name={property} value={properties[property]} onChange={setValue} />
                </div>
              })} */}
           
            </div>
           

          </div>
         
       

      </div>

    </div>
  )
}

export default SideBar;