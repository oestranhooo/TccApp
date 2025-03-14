import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/home";
import { Image, TouchableOpacity } from 'react-native';
import { headerStyles } from '../styles/stylesHeader';
import { styleBottonTab } from '../styles/styleBottonTab';
import { Ionicons } from '@expo/vector-icons';
import Robo from '../pages/robo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../pages/Config';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
             <Tab.Screen
                name="RoboPage"
                component={Robo} 
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
                    ),
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="robot-mower" size={24} color="#00FF99" />
                    ),
                }}
            />
            <Tab.Screen
                name='ConfigPage'
                component={SettingsScreen}
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
                    ),
                    tabBarIcon: () => (
                        <FontAwesome name="gear" size={24} color="#00FF99" />
                    ),
                    
                }}
                />
                
        </Tab.Navigator>
    )
}