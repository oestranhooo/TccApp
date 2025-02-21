import React, { useState } from "react";
import { Text,TextInput,View,TouchableOpacity,Image } from "react-native";
import { loginStyles } from "../styles/stylesLogin";

// Arrumar a hora q escrever no input a letra trocar de cor para branco sla 
export default function Login (){
    const [text,setText] = useState("")
  return(
    <View style = {loginStyles.container}>
        
          <Image source={require("../assets/Logo.png")} style = {loginStyles.Imagem}/>
        

        <View style = {loginStyles.boxMid}>
          <TextInput placeholder="Usuario" placeholderTextColor="#7a7a7a" style = {loginStyles.textInput} onChangeText={setText} value = {text} ></TextInput>
          <TextInput placeholder="Senha"placeholderTextColor="#7a7a7a" style = {loginStyles.textInput}></TextInput>

          <TouchableOpacity style = {loginStyles.button}>
            <Text style = {loginStyles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>

        <View style = {loginStyles.boxBottom}>
          <TouchableOpacity>
          <Text style = {loginStyles.recuSenha}>Recuperar Senha</Text>
          </TouchableOpacity>
        </View>
    </View>
    )
}
