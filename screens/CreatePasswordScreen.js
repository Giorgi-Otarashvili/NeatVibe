import { View, Text, StyleSheet, Alert, TouchableOpacity,  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import AuthInput from '../components/AuthInput';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';

const CreatePasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
   

  const handleRegister = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Please fill in both fields!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }

    const registrationData = {
      ...route.params,
      password,
    };

    console.log('User Registration:', registrationData);
    Alert.alert('Successfully Registered! 🎉');

    navigation.navigate('FirstPage');
  };

  return (
    <>
      <CustomHeader title="Register on NeatVibe" />

      <View style={styles.container}>
        <Text style={styles.title}>Set Your Password</Text>

        <AuthInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />

        <AuthInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Repeat password"
          secureTextEntry
        />

        <CustomButton title="Register" onPress={handleRegister} style={{ marginTop: 30 }} />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.prevText}>‹ Previous Page</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CreatePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    marginBottom: 20,
  },
  prevText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
});