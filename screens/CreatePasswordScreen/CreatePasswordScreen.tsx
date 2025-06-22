import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setPassword, clearRegistration } from '../../store/registrationsSlice';
import { RootStackParamList } from '../../Navigation/Navigation';
import CustomHeader from "../../components/Header/CustomHeader";
import AuthInput from '../../components/Inputs/AuthInput';
import CustomButton from '../../components/Buttons/CustomButton';
import styles from './CreatePasswordScreenStyles';

type CreatePasswordNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterStep4'>;

const CreatePasswordScreen: React.FC = () => {
  const navigation = useNavigation<CreatePasswordNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  
  const registrationData = useSelector((state: RootState) => state.registration);
  
  const [password, setPasswordLocal] = useState('');
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

    dispatch(setPassword(password));

    const finalRegistrationData = {
      ...registrationData,
      password,
    };

    console.log('User Registration:', finalRegistrationData);
    
    dispatch(clearRegistration());
    
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
        onChangeText={setPasswordLocal}
        secureTextEntry={true}
      />

      <AuthInput 
        label="Confirm Password" 
        value={confirmPassword} 
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
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