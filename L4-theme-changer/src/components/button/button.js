import React, { useState } from 'react';
import { connect } from "react-redux";
import { changeStyle } from "../../actions";
import Accordion from "../../components/accordion/accordion";
import "./buttonStyle"

const Button = (props) => {
  const [background, setBackground] = useState("#000");
  const [color, setColor] = useState("#fff");
  const [padding, setPadding] = useState("20px");
  const [margin, setMargin] = useState("");
  const [fontSize, setFontSize] = useState("12px");
  const [border, setBorder] = useState("12px");
  const [borderradius, setBorderRadius] = useState("12px");



  const { update } = props;
  const setValue = e => {
    console.log(e.target.name, "rrrrrrrrr")
    switch (e.target.name) {
      case background:
        setBackground(e.target.value)
        break;

      case color:
        setColor(e.target.value)
      break;

      case padding:
        setPadding(e.target.value)
      break;
        case borderradius:
          setBorderRadius(e.target.value)
         break;

      default:
        break;
    }



  }
  return (
    <div className="sidebar">
      <div className="app">
        <h1>components</h1>
        <Accordion>
          <div label="button">
            <div>
              <div className="form-input"   >
                <label>Background:</label>
                <input name="background"  onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>Text color:</label>
                <input name="color" value={color} onChange={setValue} />
              </div>
              <div className="form-input">
                <label>padding:</label>
                <input name="padding" value={padding} onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>font-size:</label>
                <input name="font-size" />
              </div>
              <div className="form-input"  >
                <label> border-radius:</label>
                <input name="borderradius" value={borderradius} onChange={setValue} />
              </div>
              <div className="form-input" >
                <label> border:</label>
                <input name="border" />
              </div>
              <div className="form-input" >
                <label>margin:</label>
                <input name="margin" />
              </div>
            </div>
            

          </div>
          <div label="input">
            <div>
              <div className="form-input"   >
                <label>Background:</label>
                <input name="background" value={background} onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>Text color:</label>
                <input name="color" value={color} onChange={setValue} />
              </div>
              <div className="form-input">
                <label>padding:</label>
                <input name="padding" value={padding} onChange={setValue} />
              </div>
              <div className="form-input"  >
                <label>font-size:</label>
                <input name="font-size" />
              </div>
              <div className="form-input"  >
                <label> border-radius:</label>
                <input name="borderradius" value={borderradius} onChange={setValue} />
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
            <button onClick={() => update({ background, color, padding, borderradius }, "button")}>Update</button>
          </div>  
        </Accordion>

      </div>

    </div>
  )
}

export default connect(() => ({}), { update: changeStyle })(Button)