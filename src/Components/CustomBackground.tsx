import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import {
  type PatternType,
  type PatternBackgroundType,
} from '../Types/PatternTypes';
import * as PatternFunctions from './PatternFunctions';

interface CustomBackgroundProps {
  patternType: PatternType;
  backgroundColor: string;
  foregroundColor: string;
  opacity?: number;
  spacing?: number;
  gradient?: [string, string] | [string, string, string];
  style?: ViewStyle;
}

export const CustomBackground: React.FC<CustomBackgroundProps> = ({
  patternType,
  backgroundColor,
  foregroundColor,
  opacity = 1,
  spacing = 20,
  gradient,
  style,
}) => {
  const backgroundOptions: PatternBackgroundType = {
    type: 'pattern',
    patternType,
    backgroundColor,
    foregroundColor,
    opacity,
    spacing,
    gradient,
  };

  const PatternComponent =
    PatternFunctions[`${patternType}Pattern` as keyof typeof PatternFunctions](
      backgroundOptions
    );

  return (
    <View style={[styles.container, style]}>
      <PatternComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
