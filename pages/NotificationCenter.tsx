import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/NotificationCenter";

const NotificationsScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([
    { id: 1, message: "🔴 Temperatura elevada no aviário! Verifique o sistema de climatização." },
    { id: 2, message: "🟠 Níveis altos de amônia detectados. Aumente a ventilação." },
    { id: 3, message: "🔵 Umidade acima do recomendado. Verifique a ventilação." },
    { id: 4, message: "⚠️ Níveis elevados de CO2. A circulação de ar pode estar comprometida." },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#00FF99" />
        </TouchableOpacity>
        <Text style={styles.title}>Notificações</Text>
        <TouchableOpacity onPress={() => setNotifications([])}>
          <MaterialIcons name="clear-all" size={28} color="#00FF99" />
        </TouchableOpacity>
      </View>

      {/* Lista de Notificações */}
      <ScrollView style={styles.notificationsList}>
        {notifications.length === 0 ? (
          <Text style={styles.emptyText}>🎉 Todas as notificações foram lidas!</Text>
        ) : (
          notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationItem}>
              <Text style={styles.notificationText}>{notification.message}</Text>
              <TouchableOpacity style={styles.button} onPress={() => markAsRead(notification.id)}>
                <MaterialIcons name="done" size={20} color="#00FF99" />
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
