import type { SvgProps } from 'react-native-svg';

export type PatternType =
  | 'wavy'
  | 'rhombus'
  | 'zigzag'
  | 'quarterMoon'
  | 'circle'
  | 'diagonalLeft'
  | 'diagonalRight'
  | 'dot'
  | 'horizontalLines'
  | 'verticalLines'
  | 'boxes'
  | 'triangle'
  | 'cross'
  | 'custom';

export type PatternBackgroundType = {
  type: 'pattern';
  patternType: PatternType;
  backgroundColor: string;
  foregroundColor: string;
  opacity?: number;
  spacing?: number;
  gradient?: [string, string] | [string, string, string];
  customSvg?: React.FC<SvgProps>;
};

export type CustomBackgroundType = PatternBackgroundType;

export type PatternFunction = (options: PatternBackgroundType) => React.FC;
