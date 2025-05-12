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
import { Ionicons } from "@expo/vector-icons"; // Import icons

const CreateNewPasswordScreen = () => {
  const navigation = useNavigation<any>();
  const { theme } = useTheme(); // Usar o hook useTheme para acessar o tema atual
  const styles = theme === "light" ? lightStyles : darkStyles; // Selecionar os estilos com base no tema
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setError("As senhas estão diferentes, verifique!");
      return;
    }
    if (newPassword.length < 6) { // Example validation
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    setError("");
    console.log("Resetting password...");
    // TODO: Implement password reset logic with API call
    // Navigate back to login or a success screen on completion
    navigation.navigate("Login"); // Navigate to Login after successful reset
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1, justifyContent: 'center' }}>
        <Image
          source={require("../../assets/Logo.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Criar uma nova senha?</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nova senha</Text>
          <View style={[styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>
            <TextInput
              style={{ flex: 1, color: styles.textInput.color }} // Ensure TextInput text color matches theme
              placeholder="Digite a nova senha"
              placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showNewPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
              <Ionicons 
                name={showNewPassword ? "eye-off" : "eye"} 
                size={24} 
                color={styles.inputLabel.color} // Use theme-based color
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, error ? { color: styles.errorText.color } : {}]}>Confirmar Senha</Text>
          <View style={[
            styles.textInput, 
            { flexDirection: 'row', alignItems: 'center' },
            error ? { borderColor: styles.errorText.color } : {}
          ]}>
            <TextInput
              style={{ flex: 1, color: styles.textInput.color }} // Ensure TextInput text color matches theme
              placeholder="Confirme a nova senha"
              placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                if (error) setError(""); // Clear error on input change
              }}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons 
                name={showConfirmPassword ? "eye-off" : "eye"} 
                size={24} 
                color={error ? styles.errorText.color : styles.inputLabel.color} // Use error color if applicable
              />
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewPasswordScreen;
