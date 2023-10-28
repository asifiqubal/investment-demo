import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthProvider, {useAuthContext} from './context/AuthContext';
import {CompaniesListScreen} from './screens/CompaniesList';
import {CompanyDetailsScreen} from './screens/CompanyDetails';
import {SignInScreen} from './screens/SignIn';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{title: 'Sign In'}}
      />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="CompaniesList">
      <Stack.Screen
        name="CompaniesList"
        component={CompaniesListScreen}
        options={{title: 'Companies'}}
      />
      <Stack.Screen
        name="CompanyDetails"
        component={CompanyDetailsScreen}
        options={{title: 'Company Details'}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};
