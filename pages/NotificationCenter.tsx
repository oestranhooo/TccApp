import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/NotificationCenter";

const notifications = [
  {
    id: 1,
    message: "A temperatura no aviário está fora da faixa ideal. Verifique o sistema de climatização para evitar riscos à saúde das aves.",
  },
  {
    id: 2,
    message: "Níveis elevados de amônia detectados. Aumente a ventilação imediatamente para garantir a segurança das aves.",
  },
  {
    id: 3,
    message: "A umidade está acima do recomendado. Verifique os sistemas de ventilação e desumidificação para evitar o desenvolvimento de patógenos.",
  },
  {
    id: 4,
    message: "Os níveis de CO2 estão elevados, indicando possível problema de circulação de ar. Aumente a ventilação para evitar problemas respiratórios nas aves.",
  },
];

const NotificationsScreen = () => {
  const [readNotifications, setReadNotifications] = useState<number[]>([]);

  const markAsRead = (id: number) => {
    setReadNotifications((prev) => [...prev, id]);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Notificações</Text>
        <TouchableOpacity>
          <MaterialIcons name="check" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista de Notificações */}
      <ScrollView style={styles.notificationsList}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <Text style={styles.notificationText}>{notification.message}</Text>
            {!readNotifications.includes(notification.id) && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => markAsRead(notification.id)}
              >
                <Text style={styles.buttonText}>Visto</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
