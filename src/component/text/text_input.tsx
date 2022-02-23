import * as React from 'react';

import { View, TextInput, Text } from 'react-native';

interface Props {
  onChangText?: (text: string) => void;
  defaultValues?: string;
}

const TextInputCustom = (props: Props) => {
  const { onChangText, defaultValues } = props;

  return (
    <View>
      <Text>Input: </Text>
      <TextInput value={defaultValues} onChangeText={onChangText} />
    </View>
  );
};

export default TextInputCustom;
