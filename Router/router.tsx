import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/home";
import { Image, TouchableOpacity } from 'react-native';
import { headerStyles } from '../styles/stylesHeader';
import { styleBottonTab } from '../styles/styleBottonTab';
import { Ionicons } from '@expo/vector-icons';


export default function Router(){
    const Tab = createBottomTabNavigator();
  
    return(
        <Tab.Navigator 
            initialRouteName="HomePage"
            screenOptions={{
                tabBarStyle: styleBottonTab.tabBar,
                tabBarShowLabel: false,
                tabBarIcon: () => (
                    <Ionicons name="home" size={24} color={'#00FF99'} />
                ),
            }}
        >
            <Tab.Screen
                name="HomePage"
                component={Home} 
                options={{ 
                    headerTitle: '',
                    headerStyle: headerStyles.header,
                    headerLeft: () => (
                        <Image 
                            source={require('../assets/logoHeader.png')} 
                            style={headerStyles.logo} 
                        />
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={headerStyles.notificationBell}>
                            <Ionicons name="notifications" size={24} color={'#00FF99'} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Tab.Navigator>
    )
}