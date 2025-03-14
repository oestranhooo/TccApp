import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  darkContainer: {
    backgroundColor: "#000",
  },
  lightContainer: {
    backgroundColor: "#FFF",
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
    color: "#2e7d32",
  },
  darkText: {
    color: "#00FF99",
  },
  lightText: {
    color: "#333",
  },
  menuButton: {
    padding: 10,
  },
  supportContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  whatsappButton: {
    backgroundColor: "#25D366",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  emailButton: {
    backgroundColor: "#D44638",
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
