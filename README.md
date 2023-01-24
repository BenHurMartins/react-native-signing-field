# react-native-signing-field

This library implements a signing field and a display signing feature for react native, where in the signing field will generate a SVG path of the signature and can be used as props to display it on a non-editable field.

## Installation

### React-Native-SVG

This Library needs [react-native-svg](https://github.com/software-mansion/react-native-svg) installed and configured.

Using Expo projects you don't need to install it first otherwise check the steps to install react-native-svg in the library docs first.

### Installing

```sh
yarn add react-native-signing-field
```

and on iOS

```sh
npx pod-install
```

## Usage

See the example app [here](https://github.com/BenHurMartins/react-native-signing-field/blob/main/example/src/App.tsx).

```ts
import * as React from 'react';
//...
import {
  SigningField,
  SigningDisplay,
  SigningPathType,
} from 'react-native-signing-field';

export default function App() {
  const [signing, setSigning] = React.useState<SigningPathType>([]);

  return (
    <View style={styles.container}>
      <Text> Signing Field </Text>
      <SigningField
        style={styles.signingField}
        setSigning={setSigning}
        // resetFieldButton={<Text>RESET</Text>} -- allows user to define the reset button
      />
      <Text> Signing Being Displayed </Text>
      <SigningDisplay
        signing={signing}
        style={styles.signingDisplay}
        strokeWidth={1}
      />
    </View>
  );
}
```

![Gravação de Tela 2023-01-20 às 16 42 32 2023-01-20 17_00_58](https://user-images.githubusercontent.com/22153156/213794825-887ada8c-efc8-4e07-ba65-cbed605844d1.gif)

## Props

### SigningField

| Prop             |     Type     | Description                                                                               |
| :--------------- | :----------: | :---------------------------------------------------------------------------------------- |
| setSigning       |  `function`  | Function that gets `SigningPathType` as argument, ideally to set the SigningPath on a HOC |
| style            |   `object`   | Style of the wrapping view, default is `width: 300` , `height: 100`, `borderWidth: 1`     |
| strokeColor      |   `string`   | Color of the stroke, it can be any RGB color, default is `black`                          |
| strokeWidth      |   `number`   | Width of the stroke, default is 2                                                         |
| resetFieldButton | `React Node` | Component that will replace the reset button, it can be any other component or string.    |

### SigningDisplay

| Prop        |       Type        | Description                                                         |
| :---------- | :---------------: | :------------------------------------------------------------------ |
| signing     | `SigningPathType` | Value of the path to be displayed in the SigningDisplay component.  |
| style       |     `object`      | Style of the wrapping view, default is `width: 300` , `height: 200` |
| strokeColor |     `string`      | Color of the stroke, it can be any RGB color, default is `black`    |
| strokeWidth |     `number`      | Width of the stroke, default is 2                                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
