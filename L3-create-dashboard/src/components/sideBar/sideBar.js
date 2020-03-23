import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link ,NavLink} from 'react-router-dom';
import 'antd/dist/antd.css'
import './sideBar.css'


const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  // showUserList = () => {
  //   console.log("user", this.props);
  //   this.props.history.push('/dashboard/userList')
  // }


  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['sub2']}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          <NavLink className="users" to="/dashboard/userList"  >
            <UserOutlined />
                 کاربران
           </NavLink>
          <SubMenu
            key="sub2"
            title={
              <span>
                <LaptopOutlined />
                  subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <NotificationOutlined />
                  subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <NotificationOutlined />
                  subnav 4
              </span>
            }
          >
            <Menu.Item key="9">option13</Menu.Item>
            <Menu.Item key="10">option14</Menu.Item>
            <Menu.Item key="11">option15</Menu.Item>
            <Menu.Item key="12">option16</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <NotificationOutlined />
                  subnav 5
              </span>
            }
          >
            <Menu.Item key="9">option17</Menu.Item>
            <Menu.Item key="10">option18</Menu.Item>
            <Menu.Item key="11">option19</Menu.Item>
            <Menu.Item key="12">option20</Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>

    )
  }
}
