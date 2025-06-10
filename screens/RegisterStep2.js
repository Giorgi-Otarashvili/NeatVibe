import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import AuthInput from "../components/AuthInput";
import CustomButton from "../components/CustomButton";
import { Alert } from "react-native";

const RegisterStep2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { gender } = route.params || {};

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [type, setType] = useState("");
  const [showNationalityDropdown, setShowNationalityDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const nationalities = [
    "Georgian", "American", "Other"
  ];

  const types = [
    "Student", "Professional", "Unemployd"
  ];

  const handleNext = () => {

    if (!name || !lastName || !nationality || !type) {
    Alert.alert("yvela inputi sheavse  bjjjjj");
    // return;
  
    }
    if (name && lastName && nationality && type) {
      navigation.navigate("RegisterStep3", { 
        gender, 
        name, 
        lastName, 
        nationality, 
        type 
      });
    }
  };

  const selectNationality = (selectedNationality) => {
    setNationality(selectedNationality);
    setShowNationalityDropdown(false);
  };

  const selectType = (selectedType) => {
    setType(selectedType);
    setShowTypeDropdown(false);
  };

  return (
    <>
      <CustomHeader title="Register on NeatVibe" />

      <View style={styles.container}>
        <Text style={styles.title}>Who are you?</Text>

        <AuthInput 
          label="Name" 
          value={name} 
          onChangeText={setName} 
        />
        <AuthInput label="LastName" 
         value={lastName}
         onChangeText={setLastName} />

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Nationality</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowNationalityDropdown(!showNationalityDropdown)}
          >
            <Text style={styles.dropdownText}>
              {nationality || "Select Nationality"}
            </Text>
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

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Type</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowTypeDropdown(!showTypeDropdown)}
          >
            <Text style={styles.dropdownText}>
              {type || "Select Type"}
            </Text>
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

       

        <CustomButton 
          title="Next" 
          onPress={handleNext}
          style={styles.nextButton}
        />

        <TouchableOpacity onPress={() => navigation.navigate("FirstPage")}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterStep2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    color: "white",
    marginBottom: 30,
    fontWeight: "500",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: 'white',
    marginBottom: 5,
    fontSize: 16,
  },
  inputWithAvatar: {
    position: 'relative',
  },
  dropdownContainer: {
    marginBottom: 15,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: '#222',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: 'white',
    fontSize: 16,
  },
  dropdownArrow: {
    color: 'white',
    fontSize: 16,
  },
  dropdownList: {
    backgroundColor: '#333',
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 200,
  },
  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  dropdownItemText: {
    color: 'white',
    fontSize: 16,
  },
  nextButton: {
    marginTop: 30,
  },
  signInText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  signInLink: {
    color: '#FD4D88',
  },
});