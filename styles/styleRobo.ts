import { StyleSheet } from "react-native";

export const styleRobo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#0D1B2A",
    },
    card: {
        backgroundColor: "#2D3B44",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: "System",
    },
    value: {
        color: "#4CAF50",
        fontSize: 16,
        fontWeight: "bold",
    },
    reviewButton: {
        backgroundColor: "#00FF99",
        borderRadius: 12,
        padding: 16,
        marginTop: 12,
        alignItems: "center",
    },
    reviewButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    }
})
