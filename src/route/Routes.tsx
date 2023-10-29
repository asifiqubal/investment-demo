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
    <StackAuth.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <StackAuth.Screen name="SignIn" component={SignInScreen} />
    </StackAuth.Navigator>
  );
};
const AppStack = () => {
  return (
    <StackApp.Navigator
      initialRouteName="CompaniesList"
      screenOptions={{headerShown: false}}>
      <StackApp.Screen name="CompaniesList" component={CompaniesListScreen} />
      <StackApp.Screen name="CompanyDetails" component={CompanyDetailsScreen} />
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
