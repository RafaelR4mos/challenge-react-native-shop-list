import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITEM_COLLECTION } from '../storageConfig';
import { ShoppingItem } from '../../screens/Lists';

export async function itemDeleteByList(itemIdToDelete: string, listId: string) {
  try {
    const storedItems = await AsyncStorage.getItem(
      `${ITEM_COLLECTION}-${listId}`
    );

    const items = storedItems ? JSON.parse(storedItems) : [];

    const filteredList = items.filter(
      (item: ShoppingItem) => item.itemId !== itemIdToDelete
    );

    const newStorage = JSON.stringify(filteredList);

    await AsyncStorage.setItem(`${ITEM_COLLECTION}-${listId}`, newStorage);
  } catch (error) {
    throw error;
  }
}
