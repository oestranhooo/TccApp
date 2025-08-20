import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#0D1B2A", // Fundo escuro padrão
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00FF99", // Texto verde claro
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#0D1B2A", // Fundo dos cards
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationText: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    color: "#FFF", // Texto branco
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#00FF99", // Botão verde neon
  },
  buttonText: {
    color: "#2e7d32", // Texto verde escuro
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    opacity: 0.7,
    color: "#FFF", // Texto branco para a mensagem "Todas lidas"
  },
});
