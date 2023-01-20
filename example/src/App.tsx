import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
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
        // resetFieldButton={<Text>RESET</Text>}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  signingField: {
    height: 200,
  },
  signingDisplay: {
    marginTop: 30,
    height: 200,
    borderWidth: 1,
    borderColor: 'green',
  },
});
