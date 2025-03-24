import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../styles/styleConfig";

// Definição das rotas disponíveis
type SettingsStackParamList = {
  SettingsHome: undefined;
  PersonalData: undefined;
  ReportError: undefined;
  NotificationCenter: undefined;
  PrivacyPolicy: undefined;
  Support: undefined;
  Logout: undefined;
};

const menuOptions: { title: string; icon: any; route?: keyof SettingsStackParamList }[] = [
  { title: "Dados Pessoais", icon: "person", route: "PersonalData" },
  { title: "Reportar Erro", icon: "bug-report", route: "ReportError" },
  { title: "Central de Notificação", icon: "notifications", route: "NotificationCenter" },
  { title: "Política de Privacidade", icon: "policy", route: "PrivacyPolicy" },
  { title: "Suporte", icon: "support-agent", route: "Support" },
  { title: "Sair", icon: "logout", route: "Logout" },
];

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigation = useNavigation<StackNavigationProp<SettingsStackParamList, "SettingsHome">>();

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
          Configurações
        </Text>
      </View>

      {/* Modo Escuro */}
      <View style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
        <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightOptionText]}>
          {isDarkMode ? "Tema Claro" : "Tema Escuro"}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#4CAF50" }}
          thumbColor={isDarkMode ? "#00FF99" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      {/* Lista de opções */}
      <View style={styles.menuContainer}>
        {menuOptions.map(({ title, icon, route }, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}
            onPress={() => route && navigation.navigate(route)} 
          >
            <MaterialIcons 
              name={icon} 
              size={24} 
              color={isDarkMode ? "#00FF99" : "#2e7d32"} 
            />
            <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightOptionText]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
    </View>
  );
};

export default SettingsScreen;
