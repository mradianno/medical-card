import './App.css';
import React from 'react';
import { useAuth } from './hooks/auth.hook';
import { authContext } from './services/contexts';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './hooks/routes.hook';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
  const auth = useAuth();
  const { authenticated, logOut } = auth;

  const routes = useRoutes(authenticated);

  axios.interceptors.request.use((config) => {
    config.headers = {
      Authorization: `Bearer ${Cookies.get('token')}`,
      Accept: 'application/json',
    };
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      switch (error.response.status) {
        case 401:
          logOut();
          break;
      }
      return Promise.reject(error);
    }
  );

  return (
    <BrowserRouter>
      <authContext.Provider value={auth}>
        <div className="App">{routes}</div>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default App;
