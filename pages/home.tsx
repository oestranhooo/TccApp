import { Text, Dimensions, ScrollView } from "react-native";
import { homeStyles } from "../styles/styleHome";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 255, 153, ${opacity})`,
    labelColor: () => "#fff",
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#fff",
    },
  };

  const temperatureData = {
    labels: ["00h", "06h", "12h", "18h", "00h"],
    datasets: [{ data: [20, 24, 29, 25, 22] }],
  };

  const ammoniaData = {
    labels: ["00h", "06h", "12h", "18h", "00h"],
    datasets: [{ data: [10, 20, 35, 40, 30] }],
  };

  const humidityData = {
    labels: ["00h", "06h", "12h", "18h", "00h"],
    datasets: [{ data: [30, 45, 50, 48, 42] }],
  };

  return (
    <ScrollView contentContainerStyle={homeStyles.container}>
      <Text style={homeStyles.chartTitle}>Temperatura (°C)</Text>
      <LineChart
        data={temperatureData}
        width={screenWidth - 32}
        height={180}
        chartConfig={chartConfig}
        bezier
        yAxisSuffix="°C"
        style={homeStyles.chart}
      />

      <Text style={homeStyles.chartTitle}>Amônia (µmol/L)</Text>
      <LineChart
        data={ammoniaData}
        width={screenWidth - 32}
        height={180}
        chartConfig={chartConfig}
        bezier
        yAxisSuffix="µmol"
        style={homeStyles.chart}
      />

      <Text style={homeStyles.chartTitle}>Umidade (%)</Text>
      <LineChart
        data={humidityData}
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