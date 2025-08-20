import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { darkStyles, lightStyles } from "../../styles/PasswordRecovery/stylesPasswordRecovery";
import { useTheme } from "../../context/ThemeContext";
import { supabase } from "../../supabaseClient"; // Certifique-se que você já configurou o Supabase client

const EmailConfirmationScreen = () => {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const styles = theme === "light" ? lightStyles : darkStyles;

  // Captura o deep link quando o usuário clica no email
  useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      const { url } = event;
      console.log("Link recebido:", url);

      // Extrair o token do link mágico do Supabase
      const { data, error } = await supabase.auth.exchangeCodeForSession(url);

      if (error) {
        console.error("Erro ao validar link mágico:", error.message);
        Alert.alert("Erro", "Não foi possível validar o link mágico.");
        return;
      }

      if (data?.session) {
        console.log("Sessão criada:", data.session);
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }], // leva o usuário pra Home ou Dashboard
        });
      }
    };

    // Escuta links abertos enquanto o app já está rodando
    const subscription = Linking.addEventListener("url", handleDeepLink);

    // Checa se o app foi aberto diretamente pelo link mágico
    (async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        handleDeepLink({ url: initialUrl });
      }
    })();

    return () => {
      subscription.remove();
    };
  }, [navigation]);

  const handleActivateAccount = () => {
    Alert.alert(
      "Aguardando Confirmação",
      "Por favor, abra o link enviado no seu email para ativar sua conta."
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Confirmação do E-mail</Text>

        <View style={styles.messageBox}>
          <Text style={styles.messageText}>Olá!</Text>
          <Text style={styles.messageText}>
            Sua conta GreenPulse está quase pronta. Confirme seu endereço de
            email clicando no link enviado para sua caixa de entrada.
          </Text>
        </View>

        <TouchableOpacity onPress={handleActivateAccount}>
          <Text style={styles.linkText}>
            Já confirmei meu email
          </Text>
        </TouchableOpacity>

        <Text style={styles.tipText}>
          Se você não se cadastrou na GreenPulse recentemente, por favor ignore
          este email.
        </Text>

        <Text style={styles.messageText}>Equipe GreenPulse.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailConfirmationScreen;
