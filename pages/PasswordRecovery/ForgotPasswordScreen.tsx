import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { darkStyles, lightStyles } from "../../styles/PasswordRecovery/stylesPasswordRecovery";
import { supabase } from "../../supabaseClient"; // Certifique-se de ter o cliente Supabase configurado

const ForgotPasswordScreen = () => {
  const { theme } = useTheme();
  const styles = theme === "light" ? lightStyles : darkStyles;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMagicLink = async () => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'greenpulse://login', // Seu scheme do app
        },
      });
      if (error) throw error;
      setMessage("Verifique seu email! Link mágico enviado.");
    } catch (error: any) {
      setMessage(`Erro: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1, justifyContent: 'center' }}>
        <Image
          source={require("../../assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Esqueceu a senha?</Text>
        <Text style={styles.subtitle}>Redefina sua senha em apenas um clique</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Qual seu e-mail de cadastro?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite seu e-mail"
            placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSendMagicLink}>
          <Text style={styles.buttonText}>Enviar Link Mágico</Text>
        </TouchableOpacity>

        {message ? <Text style={styles.messageText}>{message}</Text> : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
