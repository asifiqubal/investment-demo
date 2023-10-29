import React, {LegacyRef, forwardRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../utils';

interface PasswordPropsType {
  value?: string;
  onChangeText?: (text: string) => void;
}

export const IconEyeOpenOutline = ({size = 24}: {size?: number}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C13.9799 8.41998 15.5799 10.02 15.5799 12Z"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconEyeCloseOutline = ({size = 24}: {size?: number}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M14.5299 9.46998L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C12.9899 8.41998 13.8799 8.81998 14.5299 9.46998Z"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.47 14.53L2 22"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 2L14.53 9.47"
      stroke={Colors.text_medium}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Password = forwardRef(
  (props: PasswordPropsType, Ref?: LegacyRef<TextInput>) => {
    const [visibility, setVisibility] = React.useState<boolean>(false);
    return (
      <View style={styles.container}>
        <View style={[styles.InputContainer]}>
          <TextInput
            ref={Ref}
            style={styles.textInput}
            {...props}
            secureTextEntry={!visibility}
            placeholder={'Password'}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setVisibility(!visibility)}>
            {visibility ? (
              <IconEyeOpenOutline size={24} />
            ) : (
              <IconEyeCloseOutline size={24} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
export default Password;
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  InputContainer: {
    height: 44,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 12,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  iconContainer: {
    marginHorizontal: 4,
    padding: 4,
    width: 34,
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    paddingVertical: 4,
    marginRight: 16,
    color: Colors.text_dark,
  },
});
