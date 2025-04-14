import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
  const navigation = useNavigation<StackNavigationProp<SettingsStackParamList, "SettingsHome">>();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>
      </View>

      {/* Lista de opções */}
      <View style={styles.menuContainer}>
        {menuOptions.map(({ title, icon, route }, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.option}
            onPress={() => route && navigation.navigate(route)} 
          >
            <MaterialIcons 
              name={icon} 
              size={24} 
              color="#00FF99"
            />
            <Text style={styles.optionText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SettingsScreen;
