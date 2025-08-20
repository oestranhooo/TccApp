import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas principais
import Login from './pages/login';
import Router from './Router/router';

// Telas de recuperação de senha / link mágico
import ForgotPasswordScreen from './pages/PasswordRecovery/ForgotPasswordScreen';
import CreateNewPasswordScreen from './pages/PasswordRecovery/CreateNewPasswordScreen';
import EmailConfirmationScreen from './pages/PasswordRecovery/EmailConfirmationScreen';

// ThemeProvider
import { ThemeProvider } from './context/ThemeContext';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* Login e navegação principal */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Router" component={Router} />

        {/* Recuperação de senha / link mágico */}
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
        <Stack.Screen name="EmailConfirmation" component={EmailConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
