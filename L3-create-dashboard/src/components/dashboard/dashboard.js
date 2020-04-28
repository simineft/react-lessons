import React, { Component } from 'react';
import { Layout } from 'antd';
import {Route} from 'react-router-dom';
import Navbar from "../navBar/navbar"
import SideBar from "../sideBar/sideBar"
import ContentDashboard from "../content/content"
import UserList from "../UserList/UserList";
import 'antd/dist/antd.css'
import "./dashboard.css"


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
                           margin: '24px  16px  0',
                           padding: 24,
                           minHeight: 280,
                            overflow: 'initial'
                        }}
                     >
                        <div className="site-layout-background"  style={{ padding: 24, textAlign: 'center' }}     >

                           <Route path='/dashboard/userList' exact component={UserList} />

                        </div>

                     </Content> 
                  </Layout>
               </Content>
            </Layout>
         </>
      );
   }
}

export default Dashboard;