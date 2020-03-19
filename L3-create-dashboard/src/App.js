import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideBar from  "./components/SideBar/SideBar";
import  Login  from "./components/Login/login";
import  Register  from "./components/Register/Register";
import ForgetPassword  from "./components/forgetPassword/forgetPassword"
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
             <Route path='/' exact   render={(props)=>< Login  {...props}   />}  />
             <Route path='/SideBar'    render={(props)=> <SideBar  {...props}   />}  />
             <Route path='/Register'    render={(props)=> <Register  {...props}   />}  />
             <Route path='/forgetPassword'    render={(props)=> <ForgetPassword  {...props}   />}  />
          </Router>
       
    </div>
  );
}

export default App;
