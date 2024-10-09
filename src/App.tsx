import React from 'react';
import  AuthProvider  from 'react-auth-kit';

import createStore from 'react-auth-kit/createStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminPage from './components/AdminPage';
// import UserPage from './comonents/UserPage';
// import LoginPage from './components/LoginPage';
// import PrivateRoute from './components/PrivateRoute';
import Unauthorized from './components/Unauthorized';
import LoginPage from './components/LoginAdmin';
import About from './components/About';
import Home from './components/Home';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import RequireAuth from '@auth-kit/react-router/RequireAuth'
const App: React.FC = () => {
  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:'
  });
  return (
    <AuthProvider store={store}>
      <Router>
        <Routes>
          {/* <Route element={<AuthOutlet fallbackPath='/login' />}>
            <RequireAuth fallbackPath={'/login'}>
              <Unauthorized/>
            </RequireAuth>
          </Route> */}
          <Route element={<RequireAuth loginPath="/login" />}>
            <Route path="/tab" element={<Unauthorized/>} />
            
          </Route>
          <Route path="/login" element={<LoginPage/>} />
        
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
