import React from 'react';
import Login from '../../components/login/Login'
import Header from '../../components/header/Header'
import './login.css';

function login() {
  return <>
  <Header/>
  <div className='log'>
  <Login/></div>
  </>;
}

export default login;
