import React from "react";
import { View, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styleRobo } from "../styles/styleRobo";


export default function Robo(){
    return(
        <View style={styleRobo.container}>
            
        <View>
            <TouchableOpacity>
            <MaterialIcons name="battery-full" size={100} color="#00FF99" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="map-marker-path" size={100} color="#00FF99" />
            </TouchableOpacity>
        </View>

        </View>
    )
}