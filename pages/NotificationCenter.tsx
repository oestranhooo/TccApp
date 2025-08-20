import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext"; // Importando useTheme para acessar o tema
import styles from "../styles/NotificationCenter";

const NotificationsScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme(); // Acessando o tema atual
  const [notifications, setNotifications] = useState([
    { id: 1, message: "🔴 Temperatura elevada no aviário! Verifique o sistema de climatização." },
    { id: 2, message: "🟠 Níveis altos de amônia detectados. Aumente a ventilação." },
    { id: 3, message: "🔵 Umidade acima do recomendado. Verifique a ventilação." },
    { id: 4, message: "⚠️ Níveis elevados de CO2. A circulação de ar pode estar comprometida." },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  // Atualizando as cores dinamicamente com base no tema
  const headerIconColor = theme === "light" ? "#00796B" : "#00FF99";
  const buttonColor = theme === "light" ? "#00796B" : "#00FF99";
  const emptyTextColor = theme === "light" ? "#00796B" : "#FFF";

  return (
    <View style={[styles.container, { backgroundColor: theme === "light" ? "#FFFFFF" : "#0D1B2A" }]}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color={headerIconColor} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme === "light" ? "#00796B" : "#00FF99" }]}>Notificações</Text>
        <TouchableOpacity onPress={() => setNotifications([])}>
          <MaterialIcons name="clear-all" size={28} color={headerIconColor} />
        </TouchableOpacity>
      </View>

      {/* Lista de Notificações */}
      <ScrollView style={styles.notificationsList}>
        {notifications.length === 0 ? (
          <Text style={[styles.emptyText, { color: emptyTextColor }]}>🎉 Todas as notificações foram lidas!</Text>
        ) : (
          notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationItem}>
              <Text style={styles.notificationText}>{notification.message}</Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: buttonColor }]}
                onPress={() => markAsRead(notification.id)}
              >
                <MaterialIcons name="done" size={20} color="#FFF" />
                <Text style={styles.buttonText}>Marcar como lida</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
