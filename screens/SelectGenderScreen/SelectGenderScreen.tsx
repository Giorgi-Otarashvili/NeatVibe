import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import CustomHeader from "../../components/Header/CustomHeader";
import { setGender } from '../../store/registrationsSlice';
import { RootStackParamList } from '../../Navigation/Navigation';
import styles from './SelectGenderScreenStyles'


type SelectGenderNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterStep1'>;

const SelectGenderScreen: React.FC = () => {
  const navigation = useNavigation<SelectGenderNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const handleGenderSelect = (gender: "Male" | "Female") => {
    dispatch(setGender(gender));
 
    navigation.navigate("RegisterStep2");
  };

return (
  <>
    <CustomHeader title="Register on NeatVibe" />
    
    <View style={styles.container}>
      <Text style={styles.title}>Who Are You?</Text>

      <View style={styles.genderContainer}>
        <View>
          <TouchableOpacity
            style={[styles.genderButton, styles.selectedFemale]}
            onPress={() => handleGenderSelect("Female")}
          >
            <Text style={styles.genderIcon}>♀</Text>
          </TouchableOpacity>
          <Text style={styles.genderLabel}>Female</Text>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.genderButton, styles.selectedMale]}
            onPress={() => handleGenderSelect("Male")}
          >
            <Text style={styles.genderIcon}>♂</Text>
          </TouchableOpacity>
          <Text style={styles.genderLabel}>Male</Text>
        </View>
      </View>
    </View>
  </>
);
}
export default SelectGenderScreen;