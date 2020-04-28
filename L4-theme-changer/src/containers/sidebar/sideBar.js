import React, { useState } from 'react';
import { connect } from "react-redux";
import "./sideBar.css";
import { changeStyle } from "../../actions";

const SideBar = (props) => {
  const [background, setBackground] = useState("#000");
  const [color, setColor] = useState("#fff");
  const { update } = props;
  const setValue = e => {
    if (e.target.name === "background") {
      setBackground(e.target.value)
    }
    if (e.target.name === "color") {
      setColor(e.target.value)
    }
  }
  return (
    <div className="sidebar">
      <span>Buttons</span>
      <div>
        <label>Background:</label>
        <input name="background" value={background} onChange={setValue} />
        <label>Text color:</label>
        <input name="color" value={color} onChange={setValue} />
      </div>
      <button onClick={() => update({ background, color }, "button")}>Update</button>
    </div>
  )
}

export default connect(() => ({}), { update: changeStyle })(SideBar)