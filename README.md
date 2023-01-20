# react-native-signing-field

This library implements a signing field and a display signing feature for react native, where in the signing field will generate a SVG path of the signature and can be used as props to display it on a non-editable field.

## Installation

This Library relies on [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation)

Before installing it, follow react-native-reanimated instructions of setup, then:

```sh
yarn add react-native-signing-field
```

and on iOS

```sh
npx pod-install
```

## Usage

See the example app [here](https://github.com/BenHurMartins/react-native-signing-field/blob/main/example/src/App.tsx).

```
import * as React from 'react';
//...
import {
  SigningField,
  SigningDisplay,
  SigningPathType,
} from 'react-native-signing-field';

export default function App() {
  const [signing, setSigning] = React.useState<SigningPathType>[];

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
