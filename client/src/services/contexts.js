import { createContext } from 'react';

export const authContext = createContext({
  authenticated: null,
  token: null,
  userId: null,
  logIn: () => {},
  logOut: () => {},
});
