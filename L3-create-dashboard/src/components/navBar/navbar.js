import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "../navBar/navbar.css"



const { Header } = Layout;
const { SubMenu } = Menu;

export default class Navbar extends Component {
  render() {
    console.log("navbar", this.props);
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div className="logo" />
        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.props.toggle,
        })}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
        </Menu>
      </Header>

    )
  }
}
