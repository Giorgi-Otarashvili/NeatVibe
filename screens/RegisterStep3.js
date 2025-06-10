import { View, Text, StyleSheet } from "react-native";

export default function RegisterStep3() {
  return (
    <View style={styles.container}>
      <Text style={styles.RegisterStep3}>RegisterStep3</Text>
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
  RegisterStep3: {
    marginTop:50,
    color:"white"
  }
})