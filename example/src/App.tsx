import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  multiply,
  TextCustom,
  TextInputCustom,
} from 'react-native-awesome-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [text, setText] = React.useState('ccccc');

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const onChangeText = (textInput: string) => {
    console.log('text', textInput);
    setText(textInput);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextCustom />
      <TextInputCustom defaultValues={text} onChangText={onChangeText} />
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
});
