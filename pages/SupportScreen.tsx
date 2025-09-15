import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/SupportScreen";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";

const SupportScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Definição de cores dinâmicas
  const backgroundColor = isDark ? "#0D1B2A" : "#FFFFFF";
  const headerTextColor = isDark ? "#00FF99" : "#00FF99";
  const labelColor = isDark ? "#EEE" : "#333";
  const buttonBgWhatsApp = isDark ? "#25D366" : "#128C7E"; // verde WhatsApp
  const buttonBgEmail = isDark ? "#00FF99" : "#ff0202ff";
  const buttonTextColor = "#FFF";

  const handleEmailPress = () => {
    const email = "suporte@email.com";
    const subject = "Suporte ao Usuário";
    const body = "Olá, preciso de suporte...";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailto);
  };

  const handleWhatsAppPress = () => {
    const phoneNumber = "+5545999999999";
    const message = "Olá, preciso de suporte!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappURL);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: headerTextColor }]}>Suporte</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color={headerTextColor} />
        </TouchableOpacity>
      </View>

      {/* Informações de Suporte */}
      <View style={styles.supportContainer}>
        <Text style={[styles.label, { color: labelColor }]}>Nosso WhatsApp</Text>
        <TouchableOpacity
          style={[styles.whatsappButton, { backgroundColor: buttonBgWhatsApp }]}
          onPress={handleWhatsAppPress}
        >
          <Text style={[styles.buttonText, { color: buttonTextColor }]}>Abrir WhatsApp</Text>
        </TouchableOpacity>

        <Text style={[styles.label, { color: labelColor }]}>Nosso Email</Text>
        <TouchableOpacity
          style={[styles.emailButton, { backgroundColor: buttonBgEmail }]}
          onPress={handleEmailPress}
        >
          <Text style={[styles.buttonText, { color: buttonTextColor }]}>Enviar Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportScreen;
