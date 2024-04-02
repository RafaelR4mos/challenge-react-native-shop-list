import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITEM_COLLECTION } from '../storageConfig';
import { ShoppingItem } from '../../screens/Lists';

export async function itemCheckByList(itemIdToCheck: string, listId: string) {
  try {
    const storedItems = await AsyncStorage.getItem(
      `${ITEM_COLLECTION}-${listId}`
    );

    const items = storedItems ? JSON.parse(storedItems) : [];

    const newItems = items.map((item: ShoppingItem) =>
      item.itemId === itemIdToCheck ? { ...item, checked: !item.checked } : item
    );

    const newStorage = JSON.stringify(newItems);

    await AsyncStorage.setItem(`${ITEM_COLLECTION}-${listId}`, newStorage);
  } catch (error) {
    throw error;
  }
}
