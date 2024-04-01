import AsyncStorage from '@react-native-async-storage/async-storage';

import { LIST_COLLECTION } from '../storageConfig';
import { listsGetAll } from './listGetAll';
import { ShoppingList } from '../../screens/Lists';

export async function listDelete(idToDelete: string) {
  try {
    const storedLists = await listsGetAll();

    const filteredList = storedLists.filter(
      (item: ShoppingList) => item.id !== idToDelete
    );

    const newStorage = JSON.stringify(filteredList);

    AsyncStorage.setItem(LIST_COLLECTION, newStorage);
  } catch (error) {
    throw error;
  }
}
