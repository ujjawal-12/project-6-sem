import { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux'
import Mail from './component/public/forgot/mail';
import token from './component/private/tokens/tokenmethod';
import AuthWrap from './component/public/authwrapper/authWrap';
import { callsettokenaction } from './actions/loginaction';
import { useDispatch } from 'react-redux';
import Error from './component/Error';
import { Bca } from './component/private/addmission/courses/bca';
import { BcaCyber } from './component/private/addmission/courses/bca-cyber';
import { BcaAnalytic } from './component/private/addmission/courses/bca-analytic';
import { BcaWithResearch } from './component/private/addmission/courses/bca-with-research';
import { Bscit } from './component/private/addmission/courses/bsc-it';
import { BscHonsResearch } from './component/private/addmission/courses/bsc-hons-research';
import { BscHons } from './component/private/addmission/courses/bsc-hons';
import { Bscresearch } from './component/private/addmission/courses/bsc-research';
import { Applyform } from './component/private/apply/applyform';

const App = () => {
  const dispatch = useDispatch();
  let token = useSelector(state => state.login.token);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(callsettokenaction(sessionStorage.getItem("token")));
      console.log("yes")
    }
    else {
      dispatch(callsettokenaction(null));
    }
  }, [sessionStorage.getItem("token")])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={token ? <Navigate to="/dashboard" replace /> : <Root />}>
            <Route index element={<Home />}></Route>
            <Route path="placement" element={<Placement />}></Route>
            {/* <Route path="academic" element={<Academic />}></Route> */}
            <Route path="college-gallery" element={<Program />}></Route>
            <Route path="addmission" element={<Addmission />}>
              <Route index element={<Bca />}></Route>
              <Route path="bca" element={<Bca />}></Route>
              <Route path="bca-with-research" element={<BcaWithResearch></BcaWithResearch>}></Route>
              <Route path="bca-cyber-security" element={<BcaCyber></BcaCyber>}></Route>
              <Route path="bca-data-analytic" element={<BcaAnalytic></BcaAnalytic>}></Route>
              <Route path="bsc-it" element={<Bscit></Bscit>}></Route>
              <Route path="bsc-it-with-research" element={<Bscresearch></Bscresearch>}></Route>
              <Route path="bsc-hons-computer-science" element={<BscHons></BscHons>}></Route>
              <Route path="bsc-hons-computer-science-with-research" element={<BscHonsResearch></BscHonsResearch>}></Route>

            </Route>
            <Route path="course/:name" element={token ? <Applyform></Applyform> : <Navigate to="/auth/signin" replace />}></Route>

            <Route path="contact" element={<Contact />}></Route>
            <Route path="auth" element={<AuthWrap />}>
              <Route path="signin" element={<Signin />}></Route>
              <Route path="signup" element={<Signup />}></Route>
              <Route path="signin/password_reset" element={<Forgot />}> </Route>
            </Route>
          </Route>
          {/* mail route for change password  */}
          <Route path='password_link' element={token ? <Navigate to="/dashboard" replace /> : <Mail />}></Route>

          {/* Private Routes */}

          <Route path="/dashboard" element={token ? <Root /> : <Navigate to="/" replace />}>
            {/* <Route index element={<Home />}></Route> */}
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="college-gallery" element={<Program />}></Route>
            {/* <Route path="academic" element={<Academic />}></Route> */}
            <Route path="placement" element={<Placement />}></Route>
            <Route path="addmission" element={<Addmission />}>
              <Route index element={<Bca />}></Route>
              <Route path="bca" element={<Bca />}></Route>
              <Route path="bca-with-research" element={<BcaWithResearch></BcaWithResearch>}></Route>
              <Route path="bca-cyber-security" element={<BcaCyber></BcaCyber>}></Route>
              <Route path="bca-data-analytic" element={<BcaAnalytic></BcaAnalytic>}></Route>
              <Route path="bsc-it" element={<Bscit></Bscit>}></Route>
              <Route path="bsc-it-with-research" element={<Bscresearch></Bscresearch>}></Route>
              <Route path="bsc-hons-computer-science" element={<BscHons></BscHons>}></Route>
              <Route path="bsc-hons-computer-science-with-research" element={<BscHonsResearch></BscHonsResearch>}></Route>

            </Route>
            <Route path="addmission/bca-data-analytic/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/bca/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/bca-with-research/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/bca-cyber-security/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/bsc-it-with-research/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/bsc-it/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/bsc-hons-computer-science/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/bsc-hons-computer-science-with-research/course/:cousename" element={<Applyform></Applyform>}></Route>
            <Route path="addmission/course/:cousename" element={<Applyform></Applyform>}></Route>

            <Route path="contact" element={<Contact />}></Route>
            <Route path="apply" element={<Apply />}></Route>
            <Route path="logout" element={() => Logout()}></Route>
          </Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
