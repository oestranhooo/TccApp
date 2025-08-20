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
import { Ionicons } from "@expo/vector-icons";

import { darkStyles, lightStyles } from "../../styles/PasswordRecovery/stylesPasswordRecovery";
import { useTheme } from "../../context/ThemeContext";

const CreateNewPasswordScreen = () => {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const styles = theme === "light" ? lightStyles : darkStyles;

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
    if (newPassword.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setError("");
    console.log("Resetting password...");

    // TODO: Implementar integração com Supabase / backend
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Criar uma nova senha</Text>

        {/* Campo Nova Senha */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nova senha</Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              style={{ flex: 1, color: styles.textInput.color }}
              placeholder="Digite a nova senha"
              placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
              value={newPassword}
              onChangeText={(text) => {
                setNewPassword(text);
                if (error) setError("");
              }}
              secureTextEntry={!showNewPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <Ionicons
                name={showNewPassword ? "eye-off" : "eye"}
                size={24}
                color={styles.inputLabel.color}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Campo Confirmar Senha */}
        <View style={styles.inputContainer}>
          <Text
            style={[
              styles.inputLabel,
              error ? { color: styles.errorText.color } : {},
            ]}
          >
            Confirmar senha
          </Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", alignItems: "center" },
              error ? { borderColor: styles.errorText.color } : {},
            ]}
          >
            <TextInput
              style={{ flex: 1, color: styles.textInput.color }}
              placeholder="Confirme a nova senha"
              placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                if (error) setError("");
              }}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color={
                  error ? styles.errorText.color : styles.inputLabel.color
                }
              />
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        {/* Botão */}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewPasswordScreen;
