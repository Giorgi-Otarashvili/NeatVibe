import { StyleSheet } from "react-native";


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


export default styles;