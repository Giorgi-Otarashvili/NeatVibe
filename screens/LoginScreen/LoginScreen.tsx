import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AuthInput from "../../components/Inputs/AuthInput";
import CustomButton from "../../components/Buttons/CustomButton";
import NeatVibeIcon from "../../assets/vectorSvg/VectorSvg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Navigation";
import styles from "./LoginScreenStyles";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FirstPage"
>;

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
  if(username && password) {
    dispatch(login({username, password}));
    navigation.navigate("HomePage");
  }
  };

  return (
    <View style={styles.container}>
      <NeatVibeIcon style={styles.logo} size={72} />

      <AuthInput
        label="Username"
        value={username}
        onChangeText={setUsername}
      />

      <AuthInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton title="Login" onPress={handleLogin} />

      <Text style={styles.forgetPass}>Forget Password</Text>

      <TouchableOpacity onPress={() => navigation.navigate("RegisterStep1")}>
        <Text style={styles.joinNow}>
          Don’t have an account?{" "}
          <Text style={{ color: "#FD4D88" }}>Join Now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

