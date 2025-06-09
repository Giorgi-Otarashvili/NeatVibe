import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#323232" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <TouchableOpacity onPress={() => alert("Settings tapped!")}>
          <Image
            source={require("../assets/Vector.svg")}
            style={styles.logoo}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomHeader;

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
    fill:"white"
  },
});
