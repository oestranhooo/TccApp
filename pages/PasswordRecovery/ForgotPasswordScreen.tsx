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
import { useNavigation } from "@react-navigation/native";
import { darkStyles, lightStyles } from "../../styles/PasswordRecovery/stylesPasswordRecovery";
import { useTheme } from "../../context/ThemeContext"; // Reimportar o hook useTheme

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<any>();
  const { theme } = useTheme(); // Usar o hook useTheme para acessar o tema atual
  const styles = theme === "light" ? lightStyles : darkStyles; // Selecionar os estilos com base no tema
  const [email, setEmail] = useState("");

  const handleSend = () => {
    // TODO: Implement email sending logic
    console.log("Sending password reset email to:", email);
    // Navigate based on your flow, maybe to a confirmation or code screen
    navigation.navigate("VerificationCode"); 
  };

  const handleCancel = () => {
    navigation.goBack();
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
        <Text style={styles.subtitle}>Redefina a senha em duas etapas</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleCancel}>
          <Text style={styles.secondaryButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
