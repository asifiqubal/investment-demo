import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {styles} from './styles';

export const SignInScreen = () => {
  const signIn = async () => {};

  return (
    <View style={styles.container}>
      <TextInput placeholder="email" style={styles.text} />
      <TextInput placeholder="password" style={styles.text} />
      <Button onPress={signIn} title="Sign In" />
    </View>
  );
};
