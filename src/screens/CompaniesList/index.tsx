import React from 'react';
import {Text, View} from 'react-native';
import {CompaniesListPropsType} from '../../route/NavigationType';
import {styles} from './styles';

export const CompaniesListScreen = ({}: CompaniesListPropsType) => {
  return (
    <View style={styles.container}>
      <Text>CompaniesListScreen</Text>
    </View>
  );
};
