import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/PersonalDataScreen";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";

const PersonalDataScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Cores do tema
  const backgroundColor = isDark ? "#0D1B2A" : "#FFFFFF";
  const textColor = isDark ? "#00FF99" : "#00FF99"; // muda no claro
  const placeholderColor = isDark ? "#BBB" : "#666";
  const inputBg = isDark ? "#1B263B" : "#F5F5F5";

  const [name, setName] = useState("Flávio Emanuel");
  const [email, setEmail] = useState("flavio@email.com");
  const [phone, setPhone] = useState("(99) 99999-9999");
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>Dados Pessoais</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color={textColor} />
        </TouchableOpacity>
      </View>

      {/* Campos de Dados */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: textColor }]}>Nome</Text>
        <TextInput
          style={[styles.input, { color: textColor, backgroundColor: inputBg }]}
          value={name}
          onChangeText={setName}
          placeholder="Seu nome"
          placeholderTextColor={placeholderColor}
        />

        <Text style={[styles.label, { color: textColor }]}>Email</Text>
        <TextInput
          style={[styles.input, { color: textColor, backgroundColor: inputBg }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Seu email"
          keyboardType="email-address"
          placeholderTextColor={placeholderColor}
        />

        <Text style={[styles.label, { color: textColor }]}>Telefone</Text>
        <TextInput
          style={[styles.input, { color: textColor, backgroundColor: inputBg }]}
          value={phone}
          onChangeText={setPhone}
          placeholder="Seu telefone"
          keyboardType="phone-pad"
          placeholderTextColor={placeholderColor}
        />
      </View>

      {/* Botão de Salvar */}
      <TouchableOpacity style={[styles.button, { backgroundColor: textColor }]}>
        <Text style={[styles.buttonText, { color: isDark ? "#0D1B2A" : "#FFF" }]}>
          Salvar
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default PersonalDataScreen;
