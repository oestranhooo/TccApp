import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/PrivacyPolicyScreen";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Definição de cores por tema
  const backgroundColor = isDark ? "#0D1B2A" : "#FFFFFF";
  const textColor = isDark ? "#00FF99" : "#00FF99";
  const sectionTitleColor = isDark ? "#00FF99" : "#00FF99";
  const contentTextColor = isDark ? "#EEE" : "#333";
  const buttonBg = isDark ? "#00FF99" : "#00FF99";
  const buttonTextColor = isDark ? "#0D1B2A" : "#FFF";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>
          Política de Privacidade
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color={textColor} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo da Política */}
      <ScrollView style={styles.content}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          1. Coleta de Informações
        </Text>
        <Text style={[styles.text, { color: contentTextColor }]}>
          Coletamos informações fornecidas por você, como nome, email e telefone,
          para melhorar sua experiência no aplicativo.
        </Text>

        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          2. Uso dos Dados
        </Text>
        <Text style={[styles.text, { color: contentTextColor }]}>
          Utilizamos seus dados para fornecer suporte, aprimorar o serviço e
          garantir a segurança da plataforma.
        </Text>

        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          3. Compartilhamento de Informações
        </Text>
        <Text style={[styles.text, { color: contentTextColor }]}>
          Não compartilhamos suas informações com terceiros sem o seu
          consentimento, exceto quando exigido por lei.
        </Text>

        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          4. Seus Direitos
        </Text>
        <Text style={[styles.text, { color: contentTextColor }]}>
          Você pode solicitar a exclusão ou modificação dos seus dados a qualquer
          momento, entrando em contato com nosso suporte.
        </Text>
      </ScrollView>

      {/* Botão de Aceitar */}
      <TouchableOpacity style={[styles.button, { backgroundColor: buttonBg }]}>
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>
          Aceitar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivacyPolicyScreen;
