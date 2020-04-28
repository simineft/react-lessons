import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/Login/login";
import Register from "./components/Register/Register";
import ForgetPassword from "./components/forgetPassword/forgetPassword";
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/' exact render={(props) => < Login  {...props} />} />
            <Route path='/dashboard' render={(props) => <Dashboard  {...props} />} />
            <Route path='/Register' render={(props) => <Register  {...props} />} />
            <Route path='/forgetPassword' render={(props) => <ForgetPassword  {...props} />} />
          </Switch>
        </Router>

      </div>
    )
  }
}





export default App;
