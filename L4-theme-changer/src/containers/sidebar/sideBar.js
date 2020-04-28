import React from 'react';
import {connect} from "react-redux";
import "./sideBar.css";
import actions from "../../actions";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <span>Buttons</span>
      <div>
      <label>Background:</label>
      <input />
      <label>Text color:</label>
      <input />
      </div>
      <button>Update</button>
    </div>
  )
}

export default connect(() => ({}), {update: actions.update})(SideBar)