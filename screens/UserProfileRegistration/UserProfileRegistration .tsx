import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import CustomHeader from '../../components/Header/CustomHeader';
import AuthInput from '../../components/Inputs/AuthInput';
import CustomButton from '../../components/Buttons/CustomButton';
import styles from './UserProfileRegistrationStyles'; 
import { RootStackParamList } from '../../Navigation/Navigation';

type UserProfileRouteProp = RouteProp<RootStackParamList, 'RegisterStep3'>;
type NavigationProp = any; 

const UserProfileRegistration: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<UserProfileRouteProp>();

  const [username, setUsername] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleNext = () => {
    if (!username || !instagram || !email || !phone) {
      Alert.alert('Please fill in every field');
      return;
    }

    navigation.navigate('RegisterStep4', {
      ...route.params,
      username,
      instagram,
      email,
      phone,
    });
  };

  return (
    <>
      <CustomHeader title="Register on NeatVibe" />

      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>

        <AuthInput
          label="Neat Username"
          value={username}
          onChangeText={setUsername}
          placeholder="# Enter your username"
        />

        <AuthInput
          label="Instagram Username"
          value={instagram}
          onChangeText={setInstagram}
          placeholder="@your_instagram"
        />

        <AuthInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="example@mail.com"
          keyboardType="email-address"
        />

        <AuthInput
          label="Phone Number:"
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone"
          keyboardType="phone-pad"
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
