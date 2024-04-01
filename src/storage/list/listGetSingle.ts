import AsyncStorage from '@react-native-async-storage/async-storage';

import { LIST_COLLECTION } from '../storageConfig';
import { listsGetAll } from './listGetAll';
import { ShoppingList } from '../../screens/Lists';
import { AppError } from '../../utils/AppError';

export async function listGetSingle(idToFind: string) {
  try {
    const storedLists = await listsGetAll();

    const filteredList = storedLists.filter(
      (item: ShoppingList) => item.id === idToFind
    );

    if (filteredList.length === 0) {
      throw new AppError('Não foram encontrados os dados desta lista.');
    }

    return filteredList;
  } catch (error) {
    throw error;
  }
}
