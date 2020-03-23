import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css'
import "./dashboard.css"
import Navbar from "../navBar/navbar"
import SideBar from "../sideBar/sideBar"
import ContentDashboard from "../content/content"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from "../UserList/UserList";


const { Content } = Layout;

class Dashboard extends Component {
   state = {
      collapsed: false,
   };

   toggle = () => {
      console.log('toggle');

      this.setState({
         collapsed: !this.state.collapsed,
      });
   };


   render() {
      return (
         <>
            <Layout>
               <Navbar collapsed={this.state.collapsed} toggle={this.toggle} />
               <Content style={{ padding: '0 px' }}>
                  <Layout className="site-layout">
                     <SideBar collapsed={this.state.collapsed} />
                     <Content
                        className="site-layout-background"
                        style={{
                           margin: '24px 16px',
                           padding: 24,
                           minHeight: 280,
                        }}
                     >
                        <Router>
                           <Switch>
                              <Route path='/dashboard/userList' exact component={UserList} />
                           </Switch>
                        </Router>
                     </Content>
                  </Layout>
               </Content>
            </Layout>
         </>
      );
   }
}

export default Dashboard;