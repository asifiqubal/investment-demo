import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Post} from '../api';
import {LOGIN_URL} from '../utils';

interface SignInPropsType {
  email: string;
  password: string;
}

interface AuthProviderDataType {
  token: string;
  isAuthenticated: boolean;
  signIn: (params: SignInPropsType) => Promise<void>;
  isLoading: boolean;
  error: string;
}
const INITIAL_STATE: AuthProviderDataType = {
  token: '',
  isAuthenticated: false,
  signIn: async (_params: SignInPropsType) => {},
  isLoading: false,
  error: '',
};
export const AuthContext = createContext<AuthProviderDataType>(INITIAL_STATE);

export const useAuthContext = () => useContext(AuthContext);

interface AuthProviderType {
  children: ReactNode;
}
const AuthProvider = ({children}: AuthProviderType) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const signIn = async (params: SignInPropsType) => {
    setLoading(true);
    setError('');
    const {data, error} = await Post<SignInPropsType>(LOGIN_URL, params);
    if (error) {
      setError("Email or password doesn't match");
      setLoading(false);
      setIsAuthenticated(false);
      return;
    }
    const response = data as {token: string; message: string};
    setToken(response.token);
    setIsAuthenticated(true);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{isLoading, token, isAuthenticated, signIn, error}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
