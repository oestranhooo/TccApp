import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import Home from "../pages/home";
import Robo from "../pages/robo";
import SettingsStack from "./SettingsStack";

import { headerStyles } from "../styles/stylesHeader";
import { styleBottonTab } from "../styles/styleBottonTab";
import { useTheme } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

export default function Router() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // --- Definição das cores do tema ---
  const iconColor = "#00FF99"; // Cor principal para ícones da tab bar
  const tabBarBackground = isDark ? "#0D1B2A" : "#ffffff";
  const headerBackground = isDark ? "#0D1B2A" : "#ffffff";
  const headerTintColor = isDark ? "#00FF99" : "#00FF99"; // Cor para ícones e texto do header

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        // --- Estilos da Tab Bar ---
        tabBarStyle: [styleBottonTab.tabBar, { backgroundColor: tabBarBackground }],
        tabBarShowLabel: false,
        
        // --- Estilos do Header (aplicado a todas as telas) ---
        headerTitle: "",
        headerTitleAlign: "center",
        headerStyle: [headerStyles.header, { backgroundColor: headerBackground }],
        headerLeft: () => (
          <Image
            source={require("../assets/logoHeader.png")}
            style={headerStyles.logo}
          />
        ),
        headerRight: () => (
          <TouchableOpacity style={headerStyles.notificationBell}>
            <Ionicons name="notifications" size={24} color={headerTintColor} />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={iconColor} />
          ),
        }}
      />

      <Tab.Screen
        name="RoboPage"
        component={Robo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="robot-mower" size={size} color={iconColor} />
          ),
        }}
      />

      <Tab.Screen
        name="Config"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" size={size} color={iconColor} />
          ),
          headerShown: false, // O Stack Navigator interno terá seu próprio header
        }}
      />
    </Tab.Navigator>
  );
}