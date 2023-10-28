import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamType = {
  SignIn: undefined;
};
export type LoginPropsType = NativeStackScreenProps<
  AuthStackParamType,
  'SignIn'
>;
export type AppStackParamType = {
  CompaniesList: undefined;
  CompanyDetails: {
    id: string;
  };
};
export type CompaniesListPropsType = NativeStackScreenProps<
  AppStackParamType,
  'CompaniesList'
>;
export type CompaniesDetailsPropsType = NativeStackScreenProps<
  AppStackParamType,
  'CompanyDetails'
>;
