import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SelectGenderScreen from "../screens/SelectGenderScreen/SelectGenderScreen";
import UserDetailRegistration from "../screens/UserDetailRegistration/UserDetailRegistration";
import UserProfileRegistration  from "../screens/UserProfileRegistration/UserProfileRegistration ";
import CreatePasswordScreen from "../screens/CreatePasswordScreen/CreatePasswordScreen";
import HomePage from "../screens/HomePage/HomePage";

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
        <Stack.Screen name="FirstPage" component={LoginScreen} />
        <Stack.Screen name="RegisterStep1" component={SelectGenderScreen} />
        <Stack.Screen name="RegisterStep2" component={UserDetailRegistration} />
        <Stack.Screen name="RegisterStep3" component={UserProfileRegistration } />
        <Stack.Screen name="RegisterStep4" component={CreatePasswordScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;