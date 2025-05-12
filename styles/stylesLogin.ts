import { StyleSheet } from "react-native";

// Estilos para o tema escuro
export const darkLoginStyles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: "center",
        justifyContent:"center",
        backgroundColor:"#0D1B2A",
    },
    boxTop:{
        height: 200,
        backgroundColor:"#1D3133",
        marginBottom: 60,
    },
    boxMid:{
        marginTop: 40,
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        margin: 100,
        textDecorationColor: "#ffffff",
    },
    boxBottom:{
        height: 100,
    },
    textInput:{
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#00FF7F", 
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#0D1B2A",
        width : 250,
        height : 50,
        color: "#FFFFFF", // Cor do texto
    },
    button:{
        marginTop: 40,
        borderWidth: 2,
        borderColor: '#00FF99', 
        borderRadius: 25, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: '#00FF99', // Cor do texto
        fontSize: 16,
        fontWeight: 'bold'
    },
    Imagem:{
        flex: 1, 
        alignItems: "center",
        justifyContent:"center",
        width: 361, // Largura em pixels
        height: 297, // Altura em pixels
    },
    recuSenha:{
        marginTop: 60,
        color: '#00FF99', // Cor do texto
        fontSize: 16,
        fontWeight: 'bold'
    }
});

// Estilos para o tema claro
export const lightLoginStyles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: "center",
        justifyContent:"center",
        backgroundColor:"#FFFFFF", // Fundo branco
    },
    boxTop:{
        height: 200,
        backgroundColor:"#F5F5F5", // Cinza claro
        marginBottom: 60,
    },
    boxMid:{
        marginTop: 40,
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        margin: 100,
        textDecorationColor: "#000000", // Texto preto
    },
    boxBottom:{
        height: 100,
    },
    textInput:{
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#00AA66", // Verde mais escuro
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#F5F5F5", // Fundo cinza claro
        width : 250,
        height : 50,
        color: "#0D1B2A", // Cor do texto escuro
    },
    button:{
        marginTop: 40,
        borderWidth: 2,
        borderColor: '#00AA66', // Verde mais escuro
        borderRadius: 25, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00AA66', // Fundo verde
    },
    buttonText:{
        color: '#FFFFFF', // Texto branco
        fontSize: 16,
        fontWeight: 'bold'
    },
    Imagem:{
        flex: 1, 
        alignItems: "center",
        justifyContent:"center",
        width: 361, // Largura em pixels
        height: 297, // Altura em pixels
    },
    recuSenha:{
        marginTop: 60,
        color: '#00AA66', // Verde mais escuro
        fontSize: 16,
        fontWeight: 'bold'
    }
});
