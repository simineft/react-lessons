import React, { Component } from 'react';
import UserList from "../UserList/UserList";
import {withRouter,Route} from 'react-router-dom';

class ContentDashboard extends Component {
  render() {
    console.log("content",this.props);
    
    return (
      <>
        {/* <Route path='/userlist'    render={(props)=> <UserList  {...props}   />}  />   */}

     
      
      </>
    )
  }
}

export default withRouter(ContentDashboard)
