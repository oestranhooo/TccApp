import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({

    header:{
        flexDirection: 'row', // Alinha os elementos horizontalmente
    justifyContent: 'space-between', // Espaça os elementos entre si
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#0D1B2A', // Cor de fundo
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    
    },
    logo: {
        width: 150, 
        height: 130, 
        paddingVertical: 25, 
        paddingHorizontal: 25,
        marginLeft: 15,
        marginTop: -15,
      },
      notificationBell: {
        width: 24, 
        height: 24, 
        marginRight: 35,
      },

})