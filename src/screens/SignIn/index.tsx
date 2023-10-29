import React, {useEffect, useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Password} from '../../components';
import {useAuthContext, useLoadingContext} from '../../context';
import SeedersSvg from './SeedersSvg';
import {styles} from './styles';

export const SignInScreen = () => {
  const {signIn, error: authError} = useAuthContext();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const {SetLoading} = useLoadingContext();
  const [error, setError] = React.useState<string>('');
  useEffect(() => {
    setError(authError);
  }, [authError]);

  const signInHandler = async () => {
    setError('');
    if (
      email.length === 0 ||
      password.length === 0 ||
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) === false
    ) {
      setError('Enter valid email and password');
      return;
    }
    SetLoading(true);
    await signIn({email, password});
    SetLoading(false);
  };
  const refPasswordInput = useRef<TextInput>(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <SeedersSvg />
      </View>
      <View style={{flex: 2}}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={text => setEmail(text.trim())}
          returnKeyType="next"
          onSubmitEditing={() => refPasswordInput?.current?.focus()}
          autoCapitalize="none"
          value={email}
        />
        <Password
          onChangeText={value => setPassword(value)}
          value={password}
          ref={refPasswordInput}
        />
        {error.length > 0 && <Text style={styles.error_text}>{error}</Text>}
        <TouchableOpacity style={styles.sign_button} onPress={signInHandler}>
          <Text style={styles.sign_button_text}>{'Sign in'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </SafeAreaView>
  );
};
