import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
    padding: 20,
    paddingTop: 50,
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
    color: "#00FF99",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFF",
  },
  textArea: {
    height: 120,
    backgroundColor: "#222",
    borderColor: "#00FF99",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    textAlignVertical: "top",
    color: "#FFF",
  },
  button: {
    backgroundColor: "#00FF99",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#2e7d32",
    fontSize: 16,
    fontWeight: "bold",
  },
});
