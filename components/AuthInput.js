import { View, Text, TextInput, StyleSheet } from 'react-native';

const AuthInput = ({ label, value, onChangeText, secureTextEntry = false }) => {
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    color: 'white',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#222',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    color: 'white',
  },
});

export default AuthInput;
