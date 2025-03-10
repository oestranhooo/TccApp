import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/PrivacyPolicyScreen"; 

const PrivacyPolicyScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
          Política de Privacidade
        </Text>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="menu" size={30} color={isDarkMode ? "#00FF99" : "#2e7d32"} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo da Política */}
      <ScrollView style={styles.content}>
        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
          1. Coleta de Informações
        </Text>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Coletamos informações fornecidas por você, como nome, email e telefone, para melhorar sua experiência no aplicativo.
        </Text>

        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
          2. Uso dos Dados
        </Text>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Utilizamos seus dados para fornecer suporte, aprimorar o serviço e garantir a segurança da plataforma.
        </Text>

        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
          3. Compartilhamento de Informações
        </Text>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Não compartilhamos suas informações com terceiros sem o seu consentimento, exceto quando exigido por lei.
        </Text>

        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
          4. Seus Direitos
        </Text>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Você pode solicitar a exclusão ou modificação dos seus dados a qualquer momento, entrando em contato com nosso suporte.
        </Text>
      </ScrollView>

      {/* Botão de Aceitar */}
      <TouchableOpacity style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}>
        <Text style={styles.buttonText}>Aceitar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivacyPolicyScreen;
