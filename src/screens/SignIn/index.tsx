import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {useAuthContext} from '../../context';
import {styles} from './styles';

export const SignInScreen = () => {
  const {signIn} = useAuthContext();
  const [email, setEmail] = React.useState<string>('shakib.alhasan@seedrs.com');
  const [password, setPassword] = React.useState<string>('password');

  const signInHandler = async () => {
    await signIn({email, password});
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        style={styles.text}
        onChangeText={text => setEmail(text.trim())}
      />
      <TextInput
        placeholder="password"
        style={styles.text}
        onChangeText={text => setPassword(text.trim())}
      />
      <Button onPress={signInHandler} title="Sign In" />
    </View>
  );
};
