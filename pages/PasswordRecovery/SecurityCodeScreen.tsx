import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { darkStyles, lightStyles } from "../../styles/PasswordRecovery/stylesPasswordRecovery";
import { useTheme } from "../../context/ThemeContext"; // Reimportar o hook useTheme

const SecurityCodeScreen = () => {
  const navigation = useNavigation<any>();
  const { theme } = useTheme(); // Usar o hook useTheme para acessar o tema atual
  const styles = theme === "light" ? lightStyles : darkStyles; // Selecionar os estilos com base no tema
  
  // Example security code - in a real app, this would come from an API
  const securityCode = "523456";

  const handleCopyCode = () => {
    // TODO: Implement copy to clipboard functionality
    console.log("Copying security code to clipboard:", securityCode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1, justifyContent: 'center' }}>
        <Image
          source={require("../../assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Seu código de segurança</Text>

        <View style={styles.messageBox}>
          <Text style={styles.messageText}>
            Olá, Rafaela.
          </Text>
          <Text style={styles.messageText}>
            Recebemos uma solicitação para redefinir a senha de sua conta GreenPulse.
          </Text>
        </View>

        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>{securityCode}</Text>
        </View>

        <Text style={styles.subtitle}>
          Insira este código para concluir a redefinição.
        </Text>
        
        <Text style={styles.messageText}>
          Obrigado por nos ajudar a manter sua conta segura.
        </Text>
        
        <Text style={styles.messageText}>
          Equipe GreenPulse.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleCopyCode}>
          <Text style={styles.buttonText}>Copiar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityCodeScreen;
