import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { useTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.DARK_BLUE }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
