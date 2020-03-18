import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import SideBar from  "./pages/SideBar/SideBar"
import  Login  from "./pages/Login/login"

function App() {
  return (
    <div className="App">
          {/* <SideBar/>  */}
          <Router>
             <Route path='/' exact   render={(props)=><Login  {...props}   />}  />
             <Route path='/SideBar'    render={(props)=><SideBar  {...props}   />}  />
          </Router>
       
    </div>
  );
}

export default App;
