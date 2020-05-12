import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import SideBar from "./containers/sidebar/sideBar";
import Content from "./containers/content/content";
import Theme from "./theme/theme"


const colors = {
  primary: "#1f1f1f",
  secondary: "#111"
}

const text = {
  color: "#000"
}

const theme = {
  colors: { ...colors },
  buttons: {
    background: colors.primary
  }
}

function MyInput(properties) {
  return <input style={properties} value='type yout name' />
}

function MyButton(properties) {
  return <button style={properties} >Button</button>
}

function MyTextArea(properties) {
  return <textarea style={properties} value='your text is here' />
}

const myComponents = new Map([
  ['button', MyButton],
  ['text area', MyTextArea],
  ['input', MyInput],
]);


const App = () => {
  const changeProp = (newProperties) => {
    setProperties(newProperties);
  };
  const changeComp = (newComp) => {
    setComponent(newComp);
  }
  const [properties, setProperties] = useState();
  const [component, setComponent] = useState('button');
  return (
    <Theme>
      <div className="App" >
        <SideBar components={Array.from(myComponents.keys())} changeProperties={changeProp} changeComponent={changeComp} />
        <Content properties={properties} component={myComponents.get(component)} />
      </div>
    </Theme>

  );
};

export default App
