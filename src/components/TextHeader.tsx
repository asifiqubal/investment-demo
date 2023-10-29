import React from 'react';
import {Text, TextStyle} from 'react-native';
interface TextHeaderPropsType {
  text?: string;
  style?: TextStyle;
}
const TextHeader = ({text, style}: TextHeaderPropsType) => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: '700',
        marginRight: 100,
        minHeight: 40,
        ...style,
      }}>
      {text}
    </Text>
  );
};
export default TextHeader;
