import React from 'react';
import{  Button}  from "../../components/Buttons";
import "./content.css";

const Content = ({properties, component}) => {
  return (
    <div className="content">
      {/* <Button style={properties}>Click me!</Button> */}
      {component ? component(properties) : null}
    </div>
  )
}

export default Content;
