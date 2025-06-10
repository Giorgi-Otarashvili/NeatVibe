import { View, Text, StyleSheet } from "react-native";

export default function RegisterStep4() {
  return (
    <View style={styles.container}>
      <Text style={styles.RegisterStep4}>RegisterStep4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  RegisterStep4: {
    marginTop:50,
    color:"white"
  }
})