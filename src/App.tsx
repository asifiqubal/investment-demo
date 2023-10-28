import React from 'react';
import AuthProvider from './context/AuthContext';
import AppNavigator from './route/Routes';

export const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};
