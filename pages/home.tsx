import React, { useEffect, useState } from "react";
import { Text, Dimensions, ScrollView } from "react-native";
import { homeStyles } from "../styles/styleHome";
import { LineChart } from "react-native-chart-kit";
import { useTheme } from "../context/ThemeContext";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const backgroundColor = isDark ? "#0D1B2A" : "#FFFFFF";
  const textColor = isDark ? "#00FF99" : "#00FF99";

  const chartConfig = {
    backgroundGradientFrom: backgroundColor,
    backgroundGradientTo: backgroundColor,
    decimalPlaces: 0,
    color: (opacity = 1) =>
      isDark
        ? `rgba(0, 255, 153, ${opacity})`
        : `rgba(0, 121, 107, ${opacity})`,
    labelColor: () => textColor,
    style: { borderRadius: 16 },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: textColor,
    },
  };

  
  const [dados, setDados] = useState<number[]>([0, 0, 0, 0, 0]);
  const [amonia, setAmonia] = useState<number[]>([0, 0, 0, 0, 0]);
  const [umidade, setUmidade] = useState<number[]>([0, 0, 0, 0, 0]);
  const [labels, setLabels] = useState<string[]>(["", "", "", "", ""]);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch("http://192.168.1.117:3001/sensores");
        if (!resposta.ok) throw new Error("Erro na resposta do servidor");

        const json = await resposta.json();

        const temp = Number(json.temperatura) || 0;
        const umi = Number(json.umidade) || 0;
        const amo = Number(json.amonia) || 0;

        setDados((prev) => [...prev.slice(-4), temp]);
        setUmidade((prev) => [...prev.slice(-4), umi]);
        setAmonia((prev) => [...prev.slice(-4), amo]);

        const horaAtual = new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "America/Sao_Paulo",
        });
        setLabels((prev) => [...prev.slice(-4), horaAtual]);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    buscarDados();
    const intervalo = setInterval(buscarDados, 5000); 
    return () => clearInterval(intervalo);
  }, []);


  const dadosTempEscala = [...dados, 40];     
  const dadosAmoniaEscala = [...amonia, 50];  
  const dadosUmidadeEscala = [...umidade, 100]; 

  return (
    <ScrollView
      contentContainerStyle={[homeStyles.container, { backgroundColor }]}
    >
      <Text style={[homeStyles.chartTitle, { color: textColor }]}>
        Temperatura (°C)
      </Text>
      <LineChart
        data={{
          labels: [...labels, ""], 
          datasets: [{ data: dadosTempEscala, withDots: true }],
        }}
        width={screenWidth - 32}
        height={180}
        chartConfig={chartConfig}
        bezier
        yAxisSuffix="°C"
        style={homeStyles.chart}
      />

      <Text style={[homeStyles.chartTitle, { color: textColor }]}>
        Amônia (ppm)
      </Text>
      <LineChart
        data={{
          labels: [...labels, ""],
          datasets: [{ data: dadosAmoniaEscala, withDots: true }],
        }}
        width={screenWidth - 32}
        height={180}
        chartConfig={chartConfig}
        bezier
        yAxisSuffix=" ppm"
        style={homeStyles.chart}
      />

      <Text style={[homeStyles.chartTitle, { color: textColor }]}>
        Umidade (%)
      </Text>
      <LineChart
        data={{
          labels: [...labels, ""],
          datasets: [{ data: dadosUmidadeEscala, withDots: true }],
        }}
        width={screenWidth - 32}
        height={180}
        chartConfig={chartConfig}
        bezier
        yAxisSuffix="%"
        style={homeStyles.chart}
      />
    </ScrollView>
  );
}