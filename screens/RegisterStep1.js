import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";

const RegisterStep1 = () => {
  const navigation = useNavigation();

  const handleGenderSelect = (gender) => {
    navigation.navigate("RegisterStep2", { gender });
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
};

export default RegisterStep1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  genderButton: {
    borderWidth: 2,
    borderColor: "#888",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    width: 100,
  },
  selectedFemale: {
    backgroundColor: "#d81b60",
    borderColor: "#d81b60",
  },
  selectedMale: {
    backgroundColor: "#1e88e5",
    borderColor: "#1e88e5",
  },
  genderIcon: {
    fontSize: 30,
    color: "white",
    marginBottom: 5,
  },
  genderLabel: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});
