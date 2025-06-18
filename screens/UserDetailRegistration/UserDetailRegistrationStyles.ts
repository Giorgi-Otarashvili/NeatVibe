import { StyleSheet } from "react-native";

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

export default styles;