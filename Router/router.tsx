import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Home from "../pages/home";
import Robo from "../pages/robo";
import SettingsStack from "./SettingsStack";

import { headerStyles } from "../styles/stylesHeader";
import { styleBottonTab } from "../styles/styleBottonTab";
import { useTheme } from "../context/ThemeContext"; // Ajuste o caminho se necessário

const Tab = createBottomTabNavigator();

export default function Router() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const iconColor = isDark ? "#00FF99" : "#00FF99"; // Cor verde clara no dark, verde escura no light
  const tabBarBackground = isDark ? "#0D1B2A" : "#ffffff";

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarStyle: [
          styleBottonTab.tabBar,
          { backgroundColor: tabBarBackground },
        ],
        tabBarShowLabel: false,
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={24} color={iconColor} />
          ),
          headerTitle: "",
          headerStyle: headerStyles.header,
          headerLeft: () => (
            <Image
              source={require("../assets/logoHeader.png")}
              style={headerStyles.logo}
            />
          ),
          headerRight: () => (
            <TouchableOpacity style={headerStyles.notificationBell}>
              <Ionicons name="notifications" size={24} color={iconColor} />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="RoboPage"
        component={Robo}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="robot-mower"
              size={24}
              color={iconColor}
            />
          ),
          headerTitle: "",
          headerStyle: headerStyles.header,
          headerLeft: () => (
            <Image
              source={require("../assets/logoHeader.png")}
              style={headerStyles.logo}
            />
          ),
          headerRight: () => (
            <TouchableOpacity style={headerStyles.notificationBell}>
              <Ionicons name="notifications" size={24} color={iconColor} />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Config"
        component={SettingsStack}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="gear" size={24} color={iconColor} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
