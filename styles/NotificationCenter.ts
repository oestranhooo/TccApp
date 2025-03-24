import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightContainer: {
    backgroundColor: "#F5F5F5",
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
  },
  darkText: {
    color: "#00FF99",
  },
  lightText: {
    color: "#2e7d32",
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  darkNotificationItem: {
    backgroundColor: "#1E1E1E",
  },
  lightNotificationItem: {
    backgroundColor: "#FFFFFF",
  },
  notificationText: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
  },
  darkButton: {
    backgroundColor: "#00FF99",
  },
  lightButton: {
    backgroundColor: "#2e7d32",
  },
  buttonText: {
    color: "#2e7d32",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    opacity: 0.7,
  },
});
