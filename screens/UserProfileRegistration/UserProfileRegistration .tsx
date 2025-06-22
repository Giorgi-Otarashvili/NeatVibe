import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setProfileInfo } from '../../store/registrationsSlice';
import { RootStackParamList } from '../../Navigation/Navigation';
import CustomHeader from "../../components/Header/CustomHeader";
import AuthInput from '../../components/Inputs/AuthInput';
import CustomButton from '../../components/Buttons/CustomButton';
import styles from './UserProfileRegistrationStyles';

type UserProfileNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterStep3'>;

const UserProfileRegistration: React.FC = () => {
  const navigation = useNavigation<UserProfileNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  
  const savedData = useSelector((state: RootState) => state.registration);
  
  const [username, setUsername] = useState(savedData.username || '');
  const [instagram, setInstagram] = useState(savedData.instagram || '');
  const [email, setEmail] = useState(savedData.email || '');
  const [phone, setPhone] = useState(savedData.phone || '');

  useEffect(() => {
    if (username || instagram || email || phone) {
      dispatch(setProfileInfo({ username, instagram, email, phone }));
    }
  }, [username, instagram, email, phone, dispatch]);

  const handleNext = () => {
    if (!username || !instagram || !email || !phone) {
      Alert.alert('Please fill in every field');
      return;
    }

    dispatch(setProfileInfo({ username, instagram, email, phone }));
    navigation.navigate('RegisterStep4');
  };

  return (
  <>
    <CustomHeader title="Register on NeatVibe" />

    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Profile Settings</Text>

      <AuthInput 
        label="Username" 
        value={username} 
        onChangeText={setUsername} 
      />
      <AuthInput 
        label="Instagram" 
        value={instagram} 
        onChangeText={setInstagram} 
      />
      <AuthInput 
        label="Email" 
        value={email} 
        onChangeText={setEmail} 
      />
      <AuthInput 
        label="Phone" 
        value={phone} 
        onChangeText={setPhone} 
      />
      
      <CustomButton title="Next" onPress={handleNext} style={{ marginTop: 30 }} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.prevText}>‹ Previous Page</Text>
      </TouchableOpacity>
    </View>
  </>
);

};

export default UserProfileRegistration;