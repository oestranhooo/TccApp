import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/ReportErrorScreen";
import { useNavigation } from "@react-navigation/native";

const ReportErrorScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const handleSendReport = () => {
    alert("Relatório enviado! Obrigado pelo feedback.");
    setErrorMessage("");
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Reportar Erro</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#00FF99" />
        </TouchableOpacity>
      </View>

      {/* Campo de Texto para Relatório */}
      <Text style={styles.label}>Descreva o problema:</Text>
      <TextInput
        style={styles.textArea}
        value={errorMessage}
        onChangeText={setErrorMessage}
        placeholder="Escreva aqui o erro que encontrou..."
        placeholderTextColor="#BBB"
        multiline
      />

      {/* Botão de Enviar */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSendReport}
        disabled={!errorMessage.trim()}
      >
        <Text style={styles.buttonText}>Enviar Relatório</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportErrorScreen;
