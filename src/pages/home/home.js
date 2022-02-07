import React from 'react';
import Drawer from '../../components/drawer/Drawer';
import Header from '../../components/header/Header';
import Table from '../../components/table/Table';
import './home.css';
function home() {
  return <><Header/>
  <div className='safari'>
  <Drawer/>
  <Table/>
  </div>
  </> 
}

export default home;
