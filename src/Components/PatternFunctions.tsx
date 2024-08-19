import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  Path,
  Rect,
  Circle,
} from 'react-native-svg';
import {
  type PatternBackgroundType,
  type PatternFunction,
} from '../Types/PatternTypes';
import { StyleSheet } from 'react-native';

const createSvgPattern = (
  patternFunction: (props: PatternBackgroundType) => JSX.Element,
  options: PatternBackgroundType
): React.FC => {
  const {
    backgroundColor,
    foregroundColor,
    opacity = 1,
    spacing = 20,
    gradient,
  } = options;

  return () => (
    <Svg width="100%" height="100%" style={styles.absoluteFill}>
      <Defs>
        {gradient && (
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {gradient.map((color, index) => (
              <Stop
                key={index}
                offset={`${(index / (gradient.length - 1)) * 100}%`}
                stopColor={color}
                stopOpacity={opacity}
              />
            ))}
          </LinearGradient>
        )}
        <Pattern
          id="pattern"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          {patternFunction({
            ...options,
            foregroundColor: gradient ? 'url(#gradient)' : foregroundColor,
          })}
        </Pattern>
      </Defs>
      <Rect
        width="100%"
        height="100%"
        fill={backgroundColor}
        fillOpacity={opacity}
      />
      <Rect
        width="100%"
        height="100%"
        fill="url(#pattern)"
        fillOpacity={opacity}
      />
    </Svg>
  );
};

export const wavyPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M0 ${spacing / 2} c ${spacing / 4} -${spacing / 2}, ${(spacing * 3) / 4} -${spacing / 2}, ${spacing} 0 c ${spacing / 4} ${spacing / 2}, ${(spacing * 3) / 4} ${spacing / 2}, ${spacing} 0`}
        stroke={options.foregroundColor}
        strokeWidth="1"
        fill="none"
        //Todo: add a filled wave pattern
      />
    ),
    options
  );
};

export const rhombusPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M${spacing / 2} 0 L${spacing} ${spacing / 2} L${spacing / 2} ${spacing} L0 ${spacing / 2} Z`}
        fill={options.foregroundColor}
      />
    ),
    options
  );
};

export const zigzagPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M0 0 L${spacing / 2} ${spacing} L${spacing} 0`}
        stroke={options.foregroundColor}
        strokeWidth="1"
        fill="none"
      />
    ),
    options
  );
};

export const quarterMoonPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M${spacing} 0 A${spacing} ${spacing} 0 0 1 0 ${spacing} L0 0 Z`}
        fill={options.foregroundColor}
      />
    ),
    options
  );
};

export const circlePattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Circle
        cx={spacing / 2}
        cy={spacing / 2}
        r={spacing / 3}
        fill={options.foregroundColor}
      />
    ),
    options
  );
};

export const diagonalLeftPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M0 0 L${spacing} ${spacing}`}
        stroke={options.foregroundColor}
        strokeWidth="1"
      />
    ),
    options
  );
};

export const diagonalRightPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M${spacing} 0 L0 ${spacing}`}
        stroke={options.foregroundColor}
        strokeWidth="1"
      />
    ),
    options
  );
};

export const dotPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Circle
        cx={spacing / 2}
        cy={spacing / 2}
        r={spacing / 10}
        fill={options.foregroundColor}
      />
    ),
    options
  );
};

export const horizontalLinesPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M0 ${spacing / 2} L${spacing} ${spacing / 2}`}
        stroke={options.foregroundColor}
        strokeWidth="1"
      />
    ),
    options
  );
};

export const verticalLinesPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M${spacing / 2} 0 L${spacing / 2} ${spacing}`}
        stroke={options.foregroundColor}
        strokeWidth="1"
      />
    ),
    options
  );
};

export const boxesPattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Rect
        x={spacing / 4}
        y={spacing / 4}
        width={spacing / 2}
        height={spacing / 2}
        fill={options.foregroundColor}
      />
    ),
    options
  );
};

export const trianglePattern: PatternFunction = (options) => {
  const { spacing = 20 } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M${spacing / 2} 0 L${spacing} ${spacing} L0 ${spacing} Z`}
        fill={options.foregroundColor}
      />
    ),
    options
  );
};

export const crossPattern: PatternFunction = (options) => {
  const { spacing = 20, foregroundColor } = options;
  return createSvgPattern(
    () => (
      <Path
        d={`M${spacing / 4} ${spacing / 4} L${(spacing * 3) / 4} ${(spacing * 3) / 4} M${(spacing * 3) / 4} ${spacing / 4} L${spacing / 4} ${(spacing * 3) / 4}`}
        stroke={foregroundColor}
        strokeWidth="1"
      />
    ),
    options
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
