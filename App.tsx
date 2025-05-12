import Login from './pages/login';
import Router from './Router/router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar as novas telas de recuperação de senha
import ForgotPasswordScreen from './pages/PasswordRecovery/ForgotPasswordScreen';
import VerificationCodeScreen from './pages/PasswordRecovery/VerificationCodeScreen';
import CreateNewPasswordScreen from './pages/PasswordRecovery/CreateNewPasswordScreen';
import SecurityCodeScreen from './pages/PasswordRecovery/SecurityCodeScreen'; // Se necessário no fluxo principal
import EmailConfirmationScreen from './pages/PasswordRecovery/EmailConfirmationScreen'; // Se necessário no fluxo principal

// Importar o ThemeProvider
import { ThemeProvider } from './context/ThemeContext';

const Stack = createNativeStackNavigator();

// Componente interno para o navegador principal
function AppNavigator() {
  // Não precisa mais acessar o tema aqui, pois os componentes usarão o hook
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{ headerShown: false }}
      >
        {/* Login usará useTheme internamente */}
        <Stack.Screen name="Login" component={Login} />
        {/* Router usará useTheme internamente */}
        <Stack.Screen name="Router" component={Router} />
        
        {/* As telas de recuperação de senha já usam useTheme internamente */}
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
        {/* Adicione SecurityCodeScreen e EmailConfirmationScreen se forem navegáveis diretamente */}
        {/* 
        <Stack.Screen name="SecurityCode" component={SecurityCodeScreen} />
        <Stack.Screen name="EmailConfirmation" component={EmailConfirmationScreen} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    // Envolver toda a aplicação com o ThemeProvider
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

