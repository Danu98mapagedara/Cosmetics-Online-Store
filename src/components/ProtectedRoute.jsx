import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ children }) => {
  const { state: auth } = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute