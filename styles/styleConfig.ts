import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A", // Fundo escuro
    padding: 20,
    paddingTop: 50, // Ajuste para evitar a câmera
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
    color: "#00FF99", // Verde para título
  },
  menuButton: {
    padding: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D1B2A", // Fundo do botão no tema escuro
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#00FF99",
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#00FF99", // Texto branco
  },
  menuContainer: {
    marginTop: 20,
  },
});
