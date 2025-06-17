import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "../screens/FirstPage";
import RegisterStep1 from "../screens/RegisterStep1";
import RegisterStep2 from "../screens/RegisterStep2";
import RegisterStep3 from "../screens/RegisterStep3";
import RegisterStep4 from "../screens/RegisterStep4";
import HomePage from "../screens/HomePage";

export type RootStackParamList = {
  FirstPage: undefined;
  RegisterStep1: undefined;
  RegisterStep2: { gender: string };
  RegisterStep3: {
    gender: string;
    name: string;
    lastName: string;
    nationality: string;
    type: string;
  };
  RegisterStep4: {
    gender: string;
    name: string;
    lastName: string;
    nationality: string;
    type: string;
    username: string;
    instagram: string;
    email: string;
    phone: string;
  };
  HomePage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="FirstPage"
        id={undefined}
      >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
        <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
        <Stack.Screen name="RegisterStep3" component={RegisterStep3} />
        <Stack.Screen name="RegisterStep4" component={RegisterStep4} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;