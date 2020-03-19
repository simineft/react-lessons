import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
   MenuUnfoldOutlined,
   MenuFoldOutlined,
   UserOutlined,
   LaptopOutlined,
   NotificationOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import "./SideBar.css"
import  UserList from "../UserList/UserList"


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class SideBar extends Component {
   state = {
      collapsed: false,
   };

   toggle = () => {
      this.setState({
         collapsed: !this.state.collapsed,
      });
   };

   render() {
      return (
         <div>
            <Layout>
               <Header className="header">
                  <div className="logo" />
                  {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                     className: 'trigger',
                     onClick: this.toggle,
                  })}
               </Header>
               <Layout>
                  <Sider trigger={null} collapsible collapsed={this.state.collapsed}    >
                     <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                     >
                        <SubMenu
                           title={
                              <span>
                                 <UserOutlined />
                                منوی کاربران
                              </span>
                           }
                        >
                            < UserList/>
                        </SubMenu>
                     </Menu>
                  </Sider>
                  <Layout style={{ padding: '0 24px 24px' }}>
                     <Content
                        className="site-layout-background"
                        style={{
                           padding: 24,
                           margin: 0,
                           minHeight: 280,
                        }}
                     >
                        Content
                     </Content>
                  </Layout>
               </Layout>
            </Layout>
         </div>

      );
   }
}

export default SideBar;