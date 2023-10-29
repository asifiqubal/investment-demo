import React from 'react';
import AuthProvider from './context/AuthContext';
import LoadingProvider from './context/LoadingContext';
import AppNavigator from './route/Routes';

export const App = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </LoadingProvider>
  );
};
