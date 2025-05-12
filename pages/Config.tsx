import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import stylesConfig from "../styles/styleConfig"; // Importar os estilos estruturados

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
  const { theme, toggleTheme } = useTheme(); // Usar o hook useTheme
  const styles = theme === "light" ? stylesConfig.light : stylesConfig.dark; // Selecionar estilos com base no tema
  const iconColor = theme === "light" ? stylesConfig.light.title.color : stylesConfig.dark.title.color; // Cor dos ícones baseada no tema

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>
        
        {/* Botão para alternar entre modo claro e escuro */}
        <TouchableOpacity onPress={toggleTheme} style={themeButtonStyles.button(theme)}> {/* Passar tema para estilo do botão */}
          <MaterialIcons 
            name={theme === "dark" ? "wb-sunny" : "nightlight-round"} 
            size={24} 
            color={iconColor} // Usar cor do ícone baseada no tema
          />
        </TouchableOpacity>
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
              color={iconColor} // Usar cor do ícone baseada no tema
            />
            <Text style={styles.optionText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Estilos para o botão de alternar tema (agora uma função que recebe o tema)
const themeButtonStyles = {
  button: (theme: 'light' | 'dark') => ({
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme === 'light' ? stylesConfig.light.title.color : stylesConfig.dark.title.color, // Cor da borda baseada no tema
  })
};

export default SettingsScreen;

