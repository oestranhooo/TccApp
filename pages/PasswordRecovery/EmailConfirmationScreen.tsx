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

const EmailConfirmationScreen = () => {
  const navigation = useNavigation<any>();
  const { theme } = useTheme(); // Usar o hook useTheme para acessar o tema atual
  const styles = theme === "light" ? lightStyles : darkStyles; // Selecionar os estilos com base no tema

  const handleActivateAccount = () => {
    // In a real app, this would be a deep link that the user clicks in their email
    // For now, we'll just simulate the flow
    console.log("Simulating account activation...");
    // Navigate to the next relevant screen, e.g., Security Code or Login
    navigation.navigate("SecurityCode"); // Adjust navigation as per your flow
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1, justifyContent: 'center' }}>
        <Image
          source={require("../../assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Confirmação do E-mail</Text>

        <View style={styles.messageBox}>
          <Text style={styles.messageText}>
            Olá, Rafaela.
          </Text>
          <Text style={styles.messageText}>
            Sua conta GreenPulse está quase pronta. Para ativá-la, por favor confirme o seu endereço de email clicando no link abaixo.
          </Text>
        </View>

        <TouchableOpacity onPress={handleActivateAccount}>
          <Text style={styles.linkText}>Ativar minha conta/Confirmar meu email</Text>
        </TouchableOpacity>

        <Text style={styles.tipText}>
          Se você não se cadastrou na GreenPulse recentemente, por favor ignore este email.
        </Text>
        
        <Text style={styles.messageText}>
          Equipe GreenPulse.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailConfirmationScreen;
