import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from '../screens/List';
import { NewList } from '../screens/NewList';
import { Lists } from '../screens/Lists';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="lists"
        component={Lists}
      />

      <Screen
        name="newList"
        component={NewList}
      />

      <Screen
        name="list"
        component={List}
      />
    </Navigator>
  );
}
