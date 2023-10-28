import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Post} from '../api';

interface SignInPropsType {
  email: string;
  password: string;
}

interface AuthProviderDataType {
  token: string;
  isAuthenticated: boolean;
  signIn: (params: SignInPropsType) => Promise<void>;
  isLoading: boolean;
}
const INITIAL_STATE: AuthProviderDataType = {
  token: '',
  isAuthenticated: false,
  signIn: async (_params: SignInPropsType) => {},
  isLoading: false,
};
export const AuthContext = createContext<AuthProviderDataType>(INITIAL_STATE);

export const useAuthContext = () => useContext(AuthContext);

interface AuthProviderType {
  children: ReactNode;
}
const AuthProvider = ({children}: AuthProviderType) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const signIn = async (params: SignInPropsType) => {
    setLoading(true);
    const {data, error} = await Post<SignInPropsType>(
      'https://9713356zii.execute-api.eu-west-1.amazonaws.com/dev/login',
      params,
    );
    if (error) {
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
    <AuthContext.Provider value={{isLoading, token, isAuthenticated, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
