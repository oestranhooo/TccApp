import React from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import { styleRobo } from "../styles/styleRobo";
import { useTheme } from "../context/ThemeContext";

export default function Robo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textColor = { color: isDark ? "#FFFFFF" : "#00FF99" };
  const backgroundColor = { backgroundColor: isDark ? "#0D1B2A" : "#F5F5F5" };
  const cardBackground = { backgroundColor: isDark ? "#2C2C2C" : "#FFFFFF" };

  return (
    <ScrollView style={[styleRobo.container, backgroundColor]}>
      <View style={[styleRobo.card, cardBackground]}>
        <Text style={[styleRobo.text, textColor]}>Metros Percorridos</Text>
        <Text style={[styleRobo.value, textColor]}>500 M</Text>
      </View>

      <View style={[styleRobo.card, cardBackground]}>
        <Text style={[styleRobo.text, textColor]}>Saúde dos sensores</Text>
        <Text style={[styleRobo.value, textColor]}>100%</Text>
      </View>

      <View style={[styleRobo.card, cardBackground]}>
        <Text style={[styleRobo.text, textColor]}>Temperatura da bateria</Text>
        <Text style={[styleRobo.value, textColor]}>22°C</Text>
      </View>

      <View style={[styleRobo.card, cardBackground]}>
        <Text style={[styleRobo.text, textColor]}>Saúde da bateria</Text>
        <Text style={[styleRobo.value, textColor]}>100%</Text>
      </View>

      <View style={[styleRobo.card, cardBackground]}>
        <Text style={[styleRobo.text, textColor]}>Voltagem da bateria</Text>
        <Text style={[styleRobo.value, textColor]}>12 V</Text>
      </View>

      <View style={[styleRobo.card, cardBackground]}>
        <Text style={[styleRobo.text, textColor]}>Manutenção realizada</Text>
        <Text style={[styleRobo.value, textColor]}>30 dias</Text>
      </View>

      <TouchableOpacity style={styleRobo.reviewButton}>
        <Text style={styleRobo.reviewButtonText}>Marque sua revisão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
