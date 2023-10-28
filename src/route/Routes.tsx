import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAuthContext} from '../context';
import {CompaniesListScreen} from '../screens/CompaniesList';
import {CompanyDetailsScreen} from '../screens/CompanyDetails';
import {SignInScreen} from '../screens/SignIn';
import {AppStackParamType, AuthStackParamType} from './NavigationType';

const StackAuth = createNativeStackNavigator<AuthStackParamType>();
const StackApp = createNativeStackNavigator<AppStackParamType>();

const AuthStack = () => {
  return (
    <StackAuth.Navigator initialRouteName="SignIn">
      <StackAuth.Screen
        name="SignIn"
        component={SignInScreen}
        options={{title: 'Sign In'}}
      />
    </StackAuth.Navigator>
  );
};
const AppStack = () => {
  return (
    <StackApp.Navigator initialRouteName="CompaniesList">
      <StackApp.Screen
        name="CompaniesList"
        component={CompaniesListScreen}
        options={{title: 'Companies'}}
      />
      <StackApp.Screen
        name="CompanyDetails"
        component={CompanyDetailsScreen}
        options={{title: 'Company Details'}}
      />
    </StackApp.Navigator>
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

export default AppNavigator;
