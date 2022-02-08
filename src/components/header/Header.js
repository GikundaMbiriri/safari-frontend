import React from 'react';
import './header.css';
import { Button } from 'antd';
function Header() {
  return <div className='head'>

     <div className='cname'>Book-A-Safari</div>
     <div className='auth'>
     <Button type="text" className='logout'>Logout</Button>
     <Button type="text" className='logout'>My Account</Button>

     </div>
  </div>;
}

export default Header;
