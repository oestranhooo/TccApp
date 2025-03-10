import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
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
    color: "white",
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#00FF99",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
