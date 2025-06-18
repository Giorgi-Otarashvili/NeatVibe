import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CustomHeader from '../../components/Header/CustomHeader';
import AuthInput from '../../components/Inputs/AuthInput';
import CustomButton from '../../components/Buttons/CustomButton';
import styles from './CreatePasswordScreenStyles';
import { RootStackParamList } from '../../Navigation/Navigation';

type CreatePasswordScreenRouteProp = RouteProp<RootStackParamList, 'RegisterStep4'>;
type CreatePasswordScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterStep4'>;

const CreatePasswordScreen: React.FC = () => {
  const navigation = useNavigation<CreatePasswordScreenNavigationProp>();
  const route = useRoute<CreatePasswordScreenRouteProp>();

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
