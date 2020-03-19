import React, { Component } from 'react'

import { List, Avatar } from 'antd';

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
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />

      </div>
    )
  }
}
