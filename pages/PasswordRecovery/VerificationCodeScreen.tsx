import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { darkStyles, lightStyles } from "../../styles/PasswordRecovery/stylesPasswordRecovery";
import { useTheme } from "../../context/ThemeContext"; // Reimportar o hook useTheme

const VerificationCodeScreen = () => {
  const navigation = useNavigation<any>();
  const { theme } = useTheme(); // Usar o hook useTheme para acessar o tema atual
  const styles = theme === "light" ? lightStyles : darkStyles; // Selecionar os estilos com base no tema
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    // Allow only numeric input
    const numericText = text.replace(/[^0-9]/g, '');
    newCode[index] = numericText;
    setCode(newCode);

    // Move to next input
    if (numericText && index < 5) {
      inputs.current[index + 1]?.focus();
    }
    // Move to previous input on backspace
    if (!numericText && index > 0) {
      inputs.current[index - 1]?.focus();
    }
    // Dismiss keyboard if last input is filled
    if (numericText && index === 5) {
      Keyboard.dismiss();
    }
  };

  const handleSendCode = () => {
    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      // Optional: Add error handling for incomplete code
      console.log("Code is incomplete");
      return;
    }
    console.log("Verifying code:", verificationCode);
    // TODO: Implement code verification logic
    // Navigate to the create new password screen on success
    navigation.navigate("CreateNewPassword");
  };

  const handleResendCode = () => {
    // TODO: Implement resend code logic
    console.log("Resending verification code...");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1, justifyContent: 'center' }}>
        <Image
          source={require("../../assets/Logo.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Acabamos de enviar um código para seu e-mail</Text>
        <Text style={styles.subtitle}>
          Insira no campo abaixo o código de verificação de 6 dígitos enviado para o seu email.
        </Text>

        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
              // Adicionar placeholderTextColor baseado no tema, se necessário
              placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
            />
          ))}
        </View>

        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.linkText}>Reenviar código?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <Text style={styles.tipText}>
          Dica: Caso não encontre o e-mail na sua caixa de entrada, verifique a pasta de Spam!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationCodeScreen;
