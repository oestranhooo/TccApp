import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/PersonalDataScreen";
import { useNavigation } from "@react-navigation/native";

const PersonalDataScreen = () => {
  const [name, setName] = useState("Flávio Emanuel");
  const [email, setEmail] = useState("flavio@email.com");
  const [phone, setPhone] = useState("(99) 99999-9999");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Dados Pessoais</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#00FF99" />
        </TouchableOpacity>
      </View>

      {/* Campos de Dados */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Seu nome"
          placeholderTextColor="#BBB"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Seu email"
          keyboardType="email-address"
          placeholderTextColor="#BBB"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Seu telefone"
          keyboardType="phone-pad"
          placeholderTextColor="#BBB"
        />
      </View>

      {/* Botão de Salvar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalDataScreen;
