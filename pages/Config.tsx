import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/styleConfig";

const menuOptions = [
  { title: "Dados Pessoais", icon: "person" },
  { title: "Reportar Erro", icon: "bug-report" },
  { title: "Central de Notificação", icon: "notifications" },
  { title: "Política de Privacidade", icon: "policy" },
  { title: "Suporte", icon: "support-agent" },
  { title: "Sair", icon: "logout" },
];

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <View style={[
      styles.container,
      isDarkMode ? styles.darkContainer : styles.lightContainer
    ]}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[
          styles.title,
          isDarkMode ? styles.darkText : styles.lightText
        ]}>
          Configurações
        </Text>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons 
            name="menu" 
            size={30} 
            color={isDarkMode ? "#00FF99" : "#2e7d32"} 
          />
        </TouchableOpacity>
      </View>

      {/* Modo Escuro */}
      <View style={[
        styles.option,
        isDarkMode ? styles.darkOption : styles.lightOption
      ]}>
        <Text style={[
          styles.optionText,
          isDarkMode ? styles.darkText : styles.lightOptionText
        ]}>
          {isDarkMode ? "Tema Claro" : "Tema Escuro"}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#4CAF50" }}
          thumbColor={isDarkMode ? "#00FF99" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      {/* Lista de opções */}
      <View style={styles.menuContainer}>
        {menuOptions.map(({ title, icon }, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.option,
              isDarkMode ? styles.darkOption : styles.lightOption
            ]}
          >
            <MaterialIcons 
              name={icon as any} 
              size={24} 
              color={isDarkMode ? "#00FF99" : "#2e7d32"} 
            />
            <Text style={[
              styles.optionText,
              isDarkMode ? styles.darkText : styles.lightOptionText
            ]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
    </View>
  );
};

export default SettingsScreen;
