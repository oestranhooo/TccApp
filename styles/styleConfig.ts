import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Padrão escuro
    padding: 20,
    paddingTop: 50, // Ajuste para evitar a câmera
  },
  darkContainer: {
    backgroundColor: "#000", // Fundo preto no tema escuro
  },
  lightContainer: {
    backgroundColor: "#FFF", // Fundo branco para o tema claro
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
    color: "#2e7d32", // Verde para título
  },
  darkText: {
    color: "#00FF99", // Texto verde claro no tema escuro
  },
  lightText: {
    color: "#333", // Texto escuro no tema claro
  },
  menuButton: {
    padding: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E", // Padrão escuro
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#00FF99",
  },
  darkOption: {
    backgroundColor: "#000", // Preto no modo escuro
  },
  lightOption: {
    backgroundColor: "#F5F5F5", // Cinza claro no modo claro
    borderColor: "#CCC", // Borda mais suave no tema claro
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff", // Padrão escuro
  },
  lightOptionText: {
    color: "#333", // Texto escuro no modo claro
  },
  menuContainer: {
    marginTop: 20, // Ajuste para evitar a câmera
  },

  
});
