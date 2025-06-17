import { StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
