import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/ReportErrorScreen";
import { useNavigation } from "@react-navigation/native";

const ReportErrorScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const handleSendReport = () => {
    alert("Relatório enviado! Obrigado pelo feedback.");
    setErrorMessage("");
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
          Reportar Erro
        </Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#00FF99" />
        </TouchableOpacity>
      </View>

      {/* Campo de Texto para Relatório */}
      <Text
        style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}
      >
        Descreva o problema:
      </Text>
      <TextInput
        style={[
          styles.textArea,
          isDarkMode ? styles.darkInput : styles.lightInput,
        ]}
        value={errorMessage}
        onChangeText={setErrorMessage}
        placeholder="Escreva aqui o erro que encontrou..."
        placeholderTextColor={isDarkMode ? "#BBB" : "#777"}
        multiline
      />

      {/* Botão de Enviar */}
      <TouchableOpacity
        style={[
          styles.button,
          isDarkMode ? styles.darkButton : styles.lightButton,
        ]}
        onPress={handleSendReport}
        disabled={!errorMessage.trim()}
      >
        <Text style={styles.buttonText}>Enviar Relatório</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportErrorScreen;
