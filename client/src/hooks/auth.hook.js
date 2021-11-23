import React, { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import * as authActions from '../redux/auth/Actions';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const _token = Cookies.get('token');
    const _userId = Cookies.get('userId');

    if (_token) {
      setToken(_token);
      setUserId(_userId);
    }
  }, []);

  useEffect(() => {
    if (token) setAuthenticated(true);
    else setAuthenticated(false);
  }, [token]);

  const logIn = (email, pass) => {
    dispatch(authActions.logIn(email, pass)).then((result) => {
      const { token, userId } = result;

      setToken(token);
      setUserId(userId);
      Cookies.set('token', token, { path: '/', expires: 3600 });
      Cookies.set('userId', userId, { path: '/', expires: 3600 });
    });
  };

  const logOut = async () => {
    setToken(null);
    setUserId(null);
    Cookies.remove('token', { path: '/' });
    Cookies.remove('userId', { path: '/' });
  };

  return { authenticated, token, userId, logIn, logOut };
};
