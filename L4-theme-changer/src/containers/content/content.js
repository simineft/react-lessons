import React from 'react';
import { Button } from "../../components/buttons";
import { connect } from "react-redux";
import "./content.css";

const Content = (props) => {
  const { button } = props;
  return (
    <div className="content">
      <Button {...button}>Click me!</Button>
    </div>
  )
}

export default connect(
  state => ({ button: state.styles.button })
)(Content)
