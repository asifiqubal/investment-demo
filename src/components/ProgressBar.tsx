import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
interface ProgressBarPropsType {
  progress: number;
  width: number;
}
const HEIGHT = 12;
const BACKGROUND = '#dfe3e8';
const COLOR_HIGH = '#3B9C59';
const COLOR_HIGH_LIGHT = '#62BE7F';
const COLOR_LOW = '#EDB800';
const ProgressBar = ({progress, width}: ProgressBarPropsType) => {
  const progressWidthLow = useSharedValue(0);
  const progressWidthHeigh = useSharedValue(0);
  useEffect(() => {
    const progressArray = (progress / 100).toFixed(2).split('.');
    const P1 =
      parseInt(progressArray[0], 10) > 1 ? 1 : parseInt(progressArray[0], 10);
    const P2 = parseFloat(`0.${progressArray[1]}`);
    // Create two progress bar animation. The second one will start if progress more then 100 and it start 500ms delay
    progressWidthLow.value = withTiming(P1 * width, {
      duration: 1000,
      easing: Easing.inOut(Easing.poly(4)),
      reduceMotion: ReduceMotion.System,
    });
    progressWidthHeigh.value = withDelay(
      500 * P1,
      withTiming(P2 * width, {
        duration: 1000,
        easing: Easing.inOut(Easing.poly(4)),
        reduceMotion: ReduceMotion.System,
      }),
    );
  }, [progress, progressWidthLow, width, progressWidthHeigh]);
  const style = useAnimatedStyle(() => {
    return {
      width: progressWidthLow.value,
    };
  });
  const highStyle = useAnimatedStyle(() => {
    return {
      width: progressWidthHeigh.value,
    };
  });
  return (
    <View
      style={[
        styles.containerStyle,
        {
          width,
          backgroundColor: BACKGROUND,
        },
      ]}>
      <Animated.View
        style={[
          styles.progressStyle,
          style,
          {backgroundColor: progress >= 100 ? COLOR_HIGH_LIGHT : COLOR_LOW},
        ]}
      />
      <Animated.View
        style={[
          styles.progressStyle,
          highStyle,
          {backgroundColor: progress >= 100 ? COLOR_HIGH : COLOR_LOW},
        ]}
      />
    </View>
  );
};
export default ProgressBar;
const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: HEIGHT / 2,
    overflow: 'hidden',
    height: HEIGHT,
    backgroundColor: '#dfe3e8',
  },
  progressStyle: {
    position: 'absolute',
    backgroundColor: '#62BE7F',
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
  },
});
