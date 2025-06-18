import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './AuthInput.styles';

type AuthInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={label}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default AuthInput;
