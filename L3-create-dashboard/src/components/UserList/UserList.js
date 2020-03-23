import React, { Component } from 'react';
import { Layout } from 'antd';
import { List, Avatar } from 'antd';
import SideBar from "../sideBar/sideBar"
import Navbar from '../navBar/navbar';

const data = [
  {
    title: 'user 1',
  },
  {
    title: 'user 2',
  },
  {
    title: 'user 3',
  },
  {
    title: 'user 4',
  },
];



export default class UserList extends Component {


  render() {
    console.log("userlist",this.props);
    
    return (
      <>
        <Layout>
          {/* <Navbar/>  */}
          <Layout>
             {/* <SideBar/>  */}
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="description"
                  />
                </List.Item>
              )}
            />
          </Layout>
        </Layout>
       

      </>
    )
  }
}
