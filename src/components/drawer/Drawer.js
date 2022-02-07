import { Menu } from 'antd';
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './drawer.css';
const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        // style={{ width: 30 }}
        className="menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Bookings" className='subm'>
          <Menu.ItemGroup key="g1" title="Categories" className='item'>
            <Menu.Item key="1">All Bookings</Menu.Item>
            <Menu.Item key="2">Paid Bookings</Menu.Item>
            <Menu.Item key="2">Unpaid Bookings</Menu.Item>
          </Menu.ItemGroup>
     
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Industries" className='subm'>
          
          <SubMenu key="sub3" title="Hotel">
            <Menu.Item key="7">Hotels</Menu.Item>
            <Menu.Item key="8">Avai hotels</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title="Flights">
            <Menu.Item key="7">Airlines</Menu.Item>
            <Menu.Item key="8">Avai Airlines</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three" className='subm'>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;