import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({

    header:{
        flexDirection: 'row', // Alinha os elementos horizontalmente
    justifyContent: 'space-between', // Espaça os elementos entre si
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#0F2A2E', // Cor de fundo
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    },
    logo: {
        width: 100, 
        height: 40, 
        resizeMode: 'contain', // Redimensiona mantendo a proporção
      },
      notificationBell: {
        width: 24, 
        height: 24, 
      },

})