import React from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import { styleRobo } from "../styles/styleRobo";

export default function Robo() {
    return (

        

        <ScrollView style={styleRobo.container}>
            <View style={styleRobo.card}>
                <Text style={styleRobo.text}>Metros Percorridos</Text>
                <Text style={styleRobo.value}>500 M</Text>
            </View>

            <View style={styleRobo.card}>
                <Text style={styleRobo.text}>Saúde dos sensores</Text>
                <Text style={styleRobo.value}>100%</Text>
            </View>

            <View style={styleRobo.card}>
                <Text style={styleRobo.text}>Temperatura da bateria</Text>
                <Text style={styleRobo.value}>22°C</Text>
            </View>

            <View style={styleRobo.card}>
                <Text style={styleRobo.text}>Saúde da bateria</Text>
                <Text style={styleRobo.value}>100%</Text>
            </View>

            <View style={styleRobo.card}>
                <Text style={styleRobo.text}>Voltagem da bateria</Text>
                <Text style={styleRobo.value}>12 V</Text>
            </View>

            <View style={styleRobo.card}>
                <Text style={styleRobo.text}>Manutenção realizada</Text>
                <Text style={styleRobo.value}>30 dias</Text>
            </View>

            <TouchableOpacity style={styleRobo.reviewButton}>
                <Text style={styleRobo.reviewButtonText}>Marque sua revisão</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}