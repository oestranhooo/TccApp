import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#0D1B2A",
    padding: 16,
    paddingBottom: 32,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#00FF99",
    marginBottom: 8,
    marginTop: 24,
    alignSelf: "flex-start",
  },
  chart: {
    borderRadius: 16,
    marginBottom: 20,
  },
});