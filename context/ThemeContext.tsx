import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Definir o tipo do contexto
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Criar o contexto com valores padrão
const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

// Hook personalizado para usar o tema
export const useTheme = () => useContext(ThemeContext);

// Componente Provider que gerencia o estado do tema
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Usar o esquema de cores do sistema como valor inicial
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(colorScheme === 'light' ? 'light' : 'dark');

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Atualizar o tema quando o esquema de cores do sistema mudar
  useEffect(() => {
    setTheme(colorScheme === 'light' ? 'light' : 'dark');
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
