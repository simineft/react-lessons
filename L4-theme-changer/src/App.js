import React from "react";
import SideBar from "./containers/sidebar/sideBar";
import Content from "./containers/content/content";

const colors = {
  primary: "#1f1f1f",
  secondary: "#111"
}

const text = {
  color: "#000"
}

const theme = {
  colors: {...colors},
  buttons: {
    background: colors.primary
  }
}

const App = () => {
  return (
    <div className="App" >
      <SideBar />
      <Content />
    </div>
  );
};

export default App