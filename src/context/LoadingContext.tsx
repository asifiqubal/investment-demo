import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Loading} from '../components';
interface LoadingProviderDataType {
  SetLoading: (value: boolean) => void;
  isLoading: boolean;
}
const LoadingContext = createContext<LoadingProviderDataType>({
  SetLoading: () => {},
  isLoading: false,
});

export const useLoadingContext = () => useContext(LoadingContext);

interface LoadingProviderType {
  children: ReactNode;
}
const LoadingProvider = ({children}: LoadingProviderType) => {
  const [loading, SetLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{SetLoading, isLoading: loading}}>
      {children}
      {loading && <Loading />}
    </LoadingContext.Provider>
  );
};
export default LoadingProvider;
