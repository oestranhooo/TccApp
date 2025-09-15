import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/ReportErrorScreen";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";

const ReportErrorScreen = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Definição de cores do tema
  const backgroundColor = isDark ? "#0D1B2A" : "#FFFFFF";
  const textColor = isDark ? "#00FF99" : "#00FF99";
  const placeholderColor = isDark ? "#BBB" : "#666";
  const inputBg = isDark ? "#1B263B" : "#F5F5F5";

  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const handleSendReport = () => {
    alert("Relatório enviado! Obrigado pelo feedback.");
    setErrorMessage("");
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>Reportar Erro</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color={textColor} />
        </TouchableOpacity>
      </View>

      {/* Campo de Texto para Relatório */}
      <Text style={[styles.label, { color: textColor }]}>Descreva o problema:</Text>
      <TextInput
        style={[styles.textArea, { color: textColor, backgroundColor: inputBg }]}
        value={errorMessage}
        onChangeText={setErrorMessage}
        placeholder="Escreva aqui o erro que encontrou..."
        placeholderTextColor={placeholderColor}
        multiline
      />

      {/* Botão de Enviar */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: textColor }]}
        onPress={handleSendReport}
        disabled={!errorMessage.trim()}
      >
        <Text style={[styles.buttonText, { color: isDark ? "#0D1B2A" : "#FFF" }]}>
          Enviar Relatório
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportErrorScreen;
