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
  content: {
    flex: 1,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  darkButton: {
    backgroundColor: "#00FF99",
  },
  lightButton: {
    backgroundColor: "#2e7d32",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
