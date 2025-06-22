import React, { useState, useEffect } from "react";  
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeader from "../../components/Header/CustomHeader";
import AuthInput from "../../components/Inputs/AuthInput";
import CustomButton from "../../components/Buttons/CustomButton";
import styles from "./UserDetailRegistrationStyles"; 
import { RootStackParamList } from "../../Navigation/Navigation";
import { RootState, AppDispatch } from "../../store/store";
import { setPersonalInfo } from "../../store/registrationsSlice";

type UserDetailNavigationProp = NativeStackNavigationProp<RootStackParamList, "RegisterStep2">;

const UserDetailRegistration: React.FC = () => {
  const navigation = useNavigation<UserDetailNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  
  const savedData = useSelector((state: RootState) => state.registration);

  const [name, setName] = useState<string>(savedData.name || "");
  const [lastName, setLastName] = useState<string>(savedData.lastName || "");
  const [nationality, setNationality] = useState<string>(savedData.nationality || "");
  const [type, setType] = useState<string>(savedData.type || "");

  const [showNationalityDropdown, setShowNationalityDropdown] = useState<boolean>(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState<boolean>(false);

  const nationalities: string[] = ["Georgian", "American", "Other"];
  const types: string[] = ["Student", "Professional", "Unemployed"];

  useEffect(() => {
    if (name || lastName || nationality || type) {
      dispatch(setPersonalInfo({ name, lastName, nationality, type }));
    }
  }, [name, lastName, nationality, type, dispatch]);

  const handleNext = () => {
    if (!name || !lastName || !nationality || !type) {
      Alert.alert("Please fill in all fields!");
      return;
    }

    dispatch(setPersonalInfo({ name, lastName, nationality, type }));

    navigation.navigate("RegisterStep3");
  };

  const selectNationality = (selectedNationality: string) => {
    setNationality(selectedNationality);
    setShowNationalityDropdown(false);
  };

  const selectType = (selectedType: string) => {
    setType(selectedType);
    setShowTypeDropdown(false);
  };

  return (
    <>
      <CustomHeader title="Register on NeatVibe" />

      <View style={styles.container}>
        <Text style={styles.title}>Who are you?</Text>
        <AuthInput label="Name" value={name} onChangeText={setName} />
        <AuthInput label="LastName" value={lastName} onChangeText={setLastName} />

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Nationality</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowNationalityDropdown(!showNationalityDropdown)}
          >
            <Text style={styles.dropdownText}>{nationality || "Select Nationality"}</Text>
            <Text style={styles.dropdownArrow}>⌄</Text>
          </TouchableOpacity>

          {showNationalityDropdown && (
            <View style={styles.dropdownList}>
              {nationalities.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => selectNationality(item)}
                >
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Type Dropdown */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Type</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowTypeDropdown(!showTypeDropdown)}
          >
            <Text style={styles.dropdownText}>{type || "Select Type"}</Text>
            <Text style={styles.dropdownArrow}>⌄</Text>
          </TouchableOpacity>

          {showTypeDropdown && (
            <View style={styles.dropdownList}>
              {types.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => selectType(item)}
                >
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <CustomButton title="Next" onPress={handleNext} style={styles.nextButton} />

        <TouchableOpacity onPress={() => navigation.navigate("FirstPage")}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserDetailRegistration;