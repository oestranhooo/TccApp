import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#0D1B2A", // Cor de fundo
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00FF99", // Cor do título
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
    color: "#00FF99", // Cor dos subtítulos
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    color: "#FFF", // Cor do texto
  },
  content: {
    flex: 1,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#00FF99", // Cor do botão
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
