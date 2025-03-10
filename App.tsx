import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Login from './pages/login';
import Home from './pages/home';
import Config from './pages/Config'
import PersonalDataScreen from './pages/PersonalDataScreen'
import ReportErrorScreen from './pages/ReportErrorScreen'
import PrivacyPolicyScreen from './pages/PrivacyPolicyScreen'
import SupportScreen from './pages/SupportScreen'
import NotificationCenter from './pages/NotificationCenter'
export default function App() {
  return (
    <Login/>
  )
}