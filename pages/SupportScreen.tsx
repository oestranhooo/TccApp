import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/SupportScreen";
import { useNavigation } from "@react-navigation/native";
const SupportScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleEmailPress = () => {
    const email = "suporte@email.com";
    const subject = "Suporte ao Usuário";
    const body = "Olá, preciso de suporte...";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailto);
  };

  const handleWhatsAppPress = () => {
    const phoneNumber = "+5545999999999"; // Substitua pelo número real
    const message = "Olá, preciso de suporte!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    Linking.openURL(whatsappURL);
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Suporte
        </Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#00FF99" />
        </TouchableOpacity>
      </View>

      {/* Informações de Suporte */}
      <View style={styles.supportContainer}>
        <Text
          style={[
            styles.label,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Nosso WhatsApp
        </Text>
        <TouchableOpacity
          style={styles.whatsappButton}
          onPress={handleWhatsAppPress}
        >
          <Text style={styles.buttonText}>Abrir WhatsApp</Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.label,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Nosso Email
        </Text>
        <TouchableOpacity style={styles.emailButton} onPress={handleEmailPress}>
          <Text style={styles.buttonText}>Enviar Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportScreen;
