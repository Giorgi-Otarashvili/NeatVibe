import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./screens/FirstPage";
import RegisterStep1 from "./screens/RegisterStep1";
import RegisterStep2 from "./screens/RegisterStep2";
import RegisterStep3 from "./screens/RegisterStep3";
import HomePage from "./screens/HomePage";
import RegisterStep4 from "./screens/RegisterStep4";
import Navigation from "./Navigation/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Navigation/>
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
