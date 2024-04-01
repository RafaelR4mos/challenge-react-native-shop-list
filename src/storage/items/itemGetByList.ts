import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITEM_COLLECTION } from '../storageConfig';
import { ShoppingList } from '../../screens/Lists';

export async function itemGetByList(listId: string) {
  try {
    const storedItems = await AsyncStorage.getItem(
      `${ITEM_COLLECTION}-${listId}`
    );

    const items = storedItems ? JSON.parse(storedItems) : [];

    return items;
  } catch (error) {
    throw error;
  }
}
