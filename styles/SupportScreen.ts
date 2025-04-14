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
  supportContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFF", // Cor do texto
  },
  whatsappButton: {
    backgroundColor: "#25D366", // Cor do WhatsApp
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  emailButton: {
    backgroundColor: "#D44638", // Cor do email
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
