import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import stylesConfig from "../styles/styleConfig"; // Estilos estruturados
import { supabase } from "../supabaseClient"; // Ajuste o caminho se necessário

// Rotas do stack de configurações
type SettingsStackParamList = {
  SettingsHome: undefined;
  PersonalData: undefined;
  ReportError: undefined;
  NotificationCenter: undefined;
  PrivacyPolicy: undefined;
  Support: undefined;
  Logout: undefined; // Opcional, só para referência
};

// Menu de opções
const menuOptions: { title: string; icon: any; route?: keyof SettingsStackParamList | "Login" }[] = [
  { title: "Dados Pessoais", icon: "person", route: "PersonalData" },
  { title: "Reportar Erro", icon: "bug-report", route: "ReportError" },
  { title: "Central de Notificação", icon: "notifications", route: "NotificationCenter" },
  { title: "Política de Privacidade", icon: "policy", route: "PrivacyPolicy" },
  { title: "Suporte", icon: "support-agent", route: "Support" },
  { title: "Sair", icon: "logout", route: "Login" },
];

const SettingsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<SettingsStackParamList, "SettingsHome">>();
  const { theme, toggleTheme } = useTheme();
  const styles = theme === "light" ? stylesConfig.light : stylesConfig.dark;
  const iconColor = theme === "light" ? stylesConfig.light.title.color : stylesConfig.dark.title.color;

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      console.log("Usuário deslogado com sucesso");

      // Resetar navegação e voltar para Login
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" as never }], // 'as never' contorna a tipagem restrita
        })
      );
    } catch (err: any) {
      console.log("Erro ao deslogar:", err.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>

        {/* Alternar tema */}
        <TouchableOpacity onPress={toggleTheme} style={themeButtonStyles.button(theme)}>
          <MaterialIcons
            name={theme === "dark" ? "wb-sunny" : "nightlight-round"}
            size={24}
            color={iconColor}
          />
        </TouchableOpacity>
      </View>

      {/* Lista de opções */}
      <View style={styles.menuContainer}>
        {menuOptions.map(({ title, icon, route }, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => {
              if (title === "Sair") {
                handleLogout();
              } else if (route) {
                navigation.navigate(route as keyof SettingsStackParamList);
              }
            }}
          >
            <MaterialIcons name={icon} size={24} color={iconColor} />
            <Text style={styles.optionText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Botão de alternar tema
const themeButtonStyles = {
  button: (theme: 'light' | 'dark') => ({
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme === 'light' ? stylesConfig.light.title.color : stylesConfig.dark.title.color,
  })
};

export default SettingsScreen;
