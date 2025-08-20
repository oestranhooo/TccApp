import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Image, Alert } from "react-native";
import { darkLoginStyles, lightLoginStyles } from "../styles/stylesLogin";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "../supabaseClient"; // importa cliente do Supabase

export default function Login() {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const styles = theme === "light" ? lightLoginStyles : darkLoginStyles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Erro de login", error.message);
    } else {
      // Login OK → navega para Router
      navigation.navigate("Router");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} style={styles.Imagem} />

      <View style={styles.boxMid}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
          style={styles.textInput}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
          style={styles.textInput}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxBottom}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.recuSenha}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
