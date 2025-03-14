import Login from './pages/login';
import Router from './Router/router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Router" component={Router} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
}



