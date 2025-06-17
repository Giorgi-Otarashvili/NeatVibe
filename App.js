import { StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./Navigation/Navigation";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
          <StatusBar barStyle="light-content" backgroundColor="#323232" />
    <Navigation/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
