import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AuthInput from "../components/AuthInput";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

const FirstPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation = useNavigation();

  const handleLogin = () => {
    //droebit iyosese
    navigation.navigate("HomePage", { username });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Vector.svg")} style={styles.logo} />

      <AuthInput label="Username" value={username} onChangeText={setUsername} />

      <AuthInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton title="Login" onPress={handleLogin} />

      <Text style = {styles.forgetPass}>Forget Password</Text>

      <TouchableOpacity onPress={() => navigation.navigate("RegisterStep1")}>
        <Text style={styles.joinNow}>
          Don’t have an account?{" "}
          <Text style={{ color: "#FD4D88" }}>Join Now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  logo: {
    fontSize: 40,
    alignSelf: "center",
    marginBottom: 40,
    color:'green',
    // backgroundColor:'blue'
  },
  forgetPass: {
    // backgroundColor:"blue",
    textAlign:"center",
    fontSize: 13,
    marginTop:25,
    marginBottom:70
  },
  joinNow: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 20,
  },
});
