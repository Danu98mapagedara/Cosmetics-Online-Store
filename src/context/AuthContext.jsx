// src/context/AuthContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const staticUser = {
  email: 'email@gmail.com',
  password: 'D@1234',
  name: 'John Doe',
  phone: '0771234567',
  address: 'Colombo, Sri Lanka',
};

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      if (
        action.payload.email === staticUser.email &&
        action.payload.password === staticUser.password
      ) {
        return {
          ...state,
          isAuthenticated: true,
          user: staticUser,
          error: null,
        };
      } else {
        return {
          ...state,
          error: 'Invalid email or password',
        };
      }
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
