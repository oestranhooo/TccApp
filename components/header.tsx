import { Image, Touchable, TouchableOpacity, View } from "react-native";
import { headerStyles } from "../styles/stylesHeader";

export default function Header () {

    return(
            <View style={headerStyles.header}>
                <Image source={require("../assets/logoHeader.png")} style={headerStyles.logo}/>

                    <TouchableOpacity>
                    <Image source={require("../assets/notificationBell.svg")} style={headerStyles.notificationBell}/>
                    </TouchableOpacity>

            
            </View>
    )
}