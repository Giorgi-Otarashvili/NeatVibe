import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight || 40,
    backgroundColor: "#323232",
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoo: {
    height: 24,
    width: 24,
    // fill:"white"
  },
});

export default styles;