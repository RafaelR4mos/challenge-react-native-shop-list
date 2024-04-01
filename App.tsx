import { StatusBar } from 'expo-status-bar';
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  useFonts,
} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/defaultTheme';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="#040C2C"
        style="light"
      />

      {fontLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
