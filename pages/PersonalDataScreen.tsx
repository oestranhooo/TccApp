import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/PersonalDataScreen";
import { useNavigation } from "@react-navigation/native";
const PersonalDataScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("Flávio Emanuel");
  const [email, setEmail] = useState("flavio@email.com");
  const [phone, setPhone] = useState("(99) 99999-9999");
  const navigation = useNavigation();
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

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
          Dados Pessoais
        </Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#00FF99" />
        </TouchableOpacity>
      </View>

      {/* Campos de Dados */}
      <View style={styles.inputContainer}>
        <Text
          style={[
            styles.label,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Nome
        </Text>
        <TextInput
          style={[
            styles.input,
            isDarkMode ? styles.darkInput : styles.lightInput,
          ]}
          value={name}
          onChangeText={setName}
          placeholder="Seu nome"
          placeholderTextColor={isDarkMode ? "#BBB" : "#777"}
        />

        <Text
          style={[
            styles.label,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Email
        </Text>
        <TextInput
          style={[
            styles.input,
            isDarkMode ? styles.darkInput : styles.lightInput,
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Seu email"
          keyboardType="email-address"
          placeholderTextColor={isDarkMode ? "#BBB" : "#777"}
        />

        <Text
          style={[
            styles.label,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Telefone
        </Text>
        <TextInput
          style={[
            styles.input,
            isDarkMode ? styles.darkInput : styles.lightInput,
          ]}
          value={phone}
          onChangeText={setPhone}
          placeholder="Seu telefone"
          keyboardType="phone-pad"
          placeholderTextColor={isDarkMode ? "#BBB" : "#777"}
        />
      </View>

      {/* Botão de Salvar */}
      <TouchableOpacity
        style={[
          styles.button,
          isDarkMode ? styles.darkButton : styles.lightButton,
        ]}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalDataScreen;
