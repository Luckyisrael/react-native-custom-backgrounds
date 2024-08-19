# react-native-custom-backgrounds

customize your react native apps with beautiful patterns backgrounds

## Installation

```sh
npm install react-native-custom-backgrounds
```

or

```sh
yarn add react-native-custom-backgrounds
```

## Documentation

For more detailed documentation, visit [MyReactNativeLibrary Docs](https://github.com/Luckyisrael/react-native-custom-backgrounds.git).

## Usage

```ts
import { CustomBackground } from 'react-native-custom-backgrounds';

// ...

<CustomBackground
  patternType="wavy"
  backgroundColor="#E0F7FA"
  foregroundColor="#4FC3F7"
  opacity={0.6}
  spacing={25}
  style={{ flex: 1 }}
>
  {/* Your content here */}
</CustomBackground>

```

## Props

| Prop              | Type                       | Required | Description                                        |
| ----------------- | -------------------------- | -------- | -------------------------------------------------- |
| `patternType`     | `PatternType`              | Yes      | The type of pattern to display                     |
| `backgroundColor` | `string`                   | Yes      | The background color of the pattern                |
| `foregroundColor` | `string`                   | Yes      | The color of the pattern itself                    |
| `opacity`         | `number`                   | No       | The opacity of the pattern (0 to 1, default: 1)    |
| `spacing`         | `number`                   | No       | The spacing between pattern elements (default: 20) |
| `gradient`        | `string[]` (2 or 3 values) | No       | An array of colors to create a gradient background |
| `style`           | `ViewStyle`                | No       | Additional styles for the container                |

## Pattern Types

Available pattern types:

'wavy'
'rhombus'
'zigzag'
'quarterMoon'
'circle'
'diagonalLeft'
'diagonalRight'
'dot'
'horizontalLines'
'verticalLines'
'boxes'
'triangle'
'cross'

## Examples

Using as a background for your screen

```ts
import React from 'react';
import { View, Text } from 'react-native';
import { CustomBackground } from 'react-native-pattern-background';

const MyScreen = () => (
  <CustomBackground
    patternType="dot"
    backgroundColor="#1A237E"
    foregroundColor="#FFFFFF"
    opacity={0.8}
    spacing={15}
    gradient={["#1A237E", "#303F9F", "#3F51B5"]}
    style={{ flex: 1 }}
  >
    <View style={{ padding: 20 }}>
      <Text style={{ color: 'white' }}>Welcome to my app!</Text>
    </View>
  </CustomBackground>
);

export default MyScreen;
```

Using in a custom component

```ts
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CustomBackground } from 'react-native-pattern-background';

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <CustomBackground
      patternType="rhombus"
      backgroundColor="#FFB74D"
      foregroundColor="#FF5722"
      opacity={0.4}
      spacing={30}
    >
      <Text style={styles.text}>{title}</Text>
    </CustomBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
});

export default CustomButton;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
