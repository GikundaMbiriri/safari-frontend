import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './avatarr.css';

function Avatarr() {
  return <>

<div className='av'>
      <Avatar size={78} icon={<UserOutlined />} />
     
      </div>
  </>;
}

export default Avatarr;
