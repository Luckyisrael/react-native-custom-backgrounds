# react-native-custom-backgrounds

customize your react native apps with beautiful patterns backgrounds

## Installation

```sh
npm install react-native-custom-backgrounds
```

## Usage


```js
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

| Prop            | Type                        | Required | Description                                                                 |
|-----------------|-----------------------------|----------|-----------------------------------------------------------------------------|
| `patternType`   | `PatternType`               | Yes      | The type of pattern to display                                              |
| `backgroundColor` | `string`                    | Yes      | The background color of the pattern                                         |
| `foregroundColor` | `string`                    | Yes      | The color of the pattern itself                                             |
| `opacity`       | `number`                    | No       | The opacity of the pattern (0 to 1, default: 1)                             |
| `spacing`       | `number`                    | No       | The spacing between pattern elements (default: 20)                          |
| `gradient`      | `string[]` (2 or 3 values)  | No       | An array of colors to create a gradient background                          |
| `style`         | `ViewStyle`                 | No       | Additional styles for the container                                         |

## Pattern Types

PatternType
The available pattern types are:

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
