import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import CustomHeader from '../components/CustomHeader';
import AuthInput from '../components/AuthInput';
import CustomButton from '../components/CustomButton';

const RegisterStep3 = () => {
  const navigation  = useNavigation();
  const route       = useRoute();

  const [username,  setUsername]  = useState('');
  const [instagram, setInstagram] = useState('');
  const [email,     setEmail]     = useState('');
  const [phone,     setPhone]     = useState('');

  const handleNext = () => {
    if (!username || !instagram || !email || !phone) {
      Alert.alert('Please fill in every field ');
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
            style={styles.phoneInput}   
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

export default RegisterStep3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    marginBottom: 5,
    fontSize: 16,
  },
  prevText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
});
