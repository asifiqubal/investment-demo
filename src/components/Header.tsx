import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface HeaderPropsType {
  title?: string;
  onBackPress?: () => void;
  style?: ViewStyle;
}
const Header = ({title, onBackPress, style}: HeaderPropsType) => {
  return (
    <View style={[styles.container, {...style}]}>
      {onBackPress && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Svg width={24} height={24} viewBox="0 0 18 18" fill="none">
            <Path
              d="M5 12H19M5 12L11 18M5 12L11 6"
              stroke={'#000000'}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      )}
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={{fontSize: 18, fontWeight: '700', marginRight: 8, flex: 1}}>
        {title}
      </Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    height: 56,
    zIndex: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    // width: '100%',
  },
  backButton: {
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginBottom: 8,
  },
});
