import React, { FC, ReactNode, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { Path, Svg } from 'react-native-svg';

type PathType = {
  path: String[];
};

const ResetFieldIcon = () => {
  return (
    <Svg height={15} width={15}>
      <Path
        d={
          'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
        }
      />
    </Svg>
  );
};

export type SigningPathType = PathType[];

type Props = {
  strokeWidth?: number;
  strokeColor?: string;
  setSigning?: (signing: SigningPathType) => void;
  style?: ViewStyle;
  resetFieldButton?: ReactNode;
};

const SigningField: FC<Props> = ({
  setSigning,
  style: propsStyle,
  strokeColor = 'black',
  strokeWidth = 2,
  resetFieldButton,
}) => {
  const [paths, setPaths] = useState<SigningPathType>([]);

  useEffect(() => {
    setSigning && setSigning(paths);
  }, [paths, setSigning]);

  const setNewPath = (x: number, y: number) => {
    setPaths((prev) => {
      const result = [...prev, { path: [`M${x} ${y}`] }];
      return result;
    });
  };
  const updatePath = (x: number, y: number) => {
    setPaths((prev) => {
      const currentPath = paths[paths.length - 1];
      currentPath && currentPath.path.push(`L${x} ${y}`);

      return currentPath ? [...prev.slice(0, -1), currentPath] : prev;
    });
  };

  const gesture = Gesture.Pan()
    .onBegin(({ x, y }) => {
      runOnJS(setNewPath)(x, y);
    })
    .onUpdate(({ x, y }) => {
      runOnJS(updatePath)(x, y);
    });

  return (
    <GestureDetector gesture={gesture}>
      <View style={[styles.canvas, propsStyle]}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setPaths([])}
        >
          {resetFieldButton ? resetFieldButton : <ResetFieldIcon />}
        </TouchableOpacity>
        <Svg>
          {paths.map(({ path }, i) => {
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
    </GestureDetector>
  );
};

export default SigningField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    width: 300,
    height: 100,
    borderWidth: 1,
    margin: 30,
  },
  resetButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 2,
  },
});
