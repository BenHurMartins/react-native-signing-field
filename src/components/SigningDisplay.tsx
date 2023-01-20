import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import type { SigningPathType } from './SigningField';

type Props = {
  strokeWidth?: number;
  strokeColor?: string;
  signing: SigningPathType;
  style?: ViewStyle;
};

const SigningDisplay: FC<Props> = ({
  signing,
  style: propsStyle,
  strokeColor = 'black',
  strokeWidth = 2,
}) => {
  return (
    <View style={[styles.canvas, propsStyle]}>
      <Svg>
        {signing.map(({ path }, i) => {
          return (
            <Path
              key={i}
              d={`${path.join(' ')}`}
              fill="none"
              strokeWidth={`${strokeWidth}px`}
              stroke={strokeColor}
            />
          );
        })}
      </Svg>
    </View>
  );
};

export default SigningDisplay;

const styles = StyleSheet.create({
  canvas: {
    width: 300,
    height: 200,
  },
});
