import React from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { darkLoginStyles, lightLoginStyles } from "../styles/stylesLogin"; // Importar ambos os estilos
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext"; // Importar useTheme

export default function Login() {
  const navigation = useNavigation<any>();
  const { theme } = useTheme(); // Usar o tema do contexto
  const styles = theme === "light" ? lightLoginStyles : darkLoginStyles; // Selecionar estilos com base no tema

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} style={styles.Imagem} />

      <View style={styles.boxMid}>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
          style={styles.textInput}
          // Add value and onChangeText if managing state
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor={theme === "light" ? "#AAAAAA" : "#7a7a7a"}
          style={styles.textInput}
          secureTextEntry // Typically for password
          // Add value and onChangeText if managing state
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Router")}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxBottom}>
        {/* Navigate to ForgotPassword screen on press */}
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.recuSenha}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

