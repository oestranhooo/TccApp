import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../pages/Config";
import PersonalDataScreen from "../pages/PersonalDataScreen";
import ReportErrorScreen from "../pages/ReportErrorScreen";
import NotificationCenterScreen from "../pages/NotificationCenter";
import PrivacyPolicyScreen from "../pages/PrivacyPolicyScreen";
import SupportScreen from "../pages/SupportScreen";
import Login from "../pages/login";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsHome" component={SettingsScreen} />
      <Stack.Screen name="PersonalData" component={PersonalDataScreen} />
      <Stack.Screen name="ReportError" component={ReportErrorScreen} />
      <Stack.Screen
        name="NotificationCenter"
        component={NotificationCenterScreen}
      />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Support" component={SupportScreen} />
      <Stack.Screen name="Logout" component={Login} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
