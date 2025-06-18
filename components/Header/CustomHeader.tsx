import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import NeatVibeIcon from "../../assets/vectorSvg/VectorSvg";
import styles from "./CustomHeaderStyles";

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <NeatVibeIcon size={24} color="white" style={styles.logoo} />
      </View>
    </>
  );
};

export default CustomHeader;