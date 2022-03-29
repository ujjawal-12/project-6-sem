import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Root } from './component/public/root/root';
import { Signin } from './component/public/signin/signin';
import { Signup } from './component/public/signup/signup';
import { Navbar } from './component/private/dashboard/navbar';
import { Logout } from './component/private/logout/logout';
import { Home } from './component/private/home/home';
import { Program } from './component/private/program/program';
import { Academic } from './component/private/academic/academic';
import { Placement } from './component/private/placement/placement';
import { Addmission } from './component/private/addmission/addmission';
import { Contact } from './component/private/contact/contact';
import { Apply } from './component/private/apply/apply';
import { Forgot } from './component/public/forgot/forgot';
import {useSelector} from 'react-redux'
import Mail from './component/public/forgot/mail';
import token from './component/private/tokens/tokenmethod';

const App = () => {

  let token = useSelector(state => state.login.token);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={token ? <Navigate to="/dashboard" replace /> : <Root />}>
            <Route path='/' element={<Signin />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="password_reset" element={<Forgot />}> </Route>
          </Route>
          {/* mail route for change password  */}
          <Route path='password_link' element={token? <Navigate to="/dashboard" replace />:<Mail/>}></Route>
          {/* Private Routes */}
          <Route path="/dashboard" element={token ? <Navbar  /> : <Navigate to="/" replace />}>
            {/* <Route index element={<Home />}></Route> */}
            <Route path='home' element={<Home />}></Route>
            <Route path="program" element={<Program />}></Route>
            <Route path="academic" element={<Academic />}></Route>
            <Route path="placement" element={<Placement />}></Route>
            <Route path="addmission" element={<Addmission />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="apply" element={<Apply />}></Route>
            <Route path="logout" element={<Logout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;