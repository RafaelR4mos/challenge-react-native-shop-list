import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITEM_COLLECTION } from '../storageConfig';
import { ShoppingItem, ShoppingList } from '../../screens/Lists';
import { itemGetByList } from './itemGetByList';
import { AppError } from '../../utils/AppError';

export async function itemCreateByList(newItem: ShoppingItem, listId: string) {
  try {
    const storedItems = await itemGetByList(listId);

    const itemAlreadyExists = storedItems
      .map((item: ShoppingItem) => item.text)
      .includes(newItem.text);

    if (itemAlreadyExists) {
      throw new AppError('Não é possível inserir itens com o mesmo nome');
    }

    const newStorage = JSON.stringify([...storedItems, newItem]);
    await AsyncStorage.setItem(`${ITEM_COLLECTION}-${listId}`, newStorage);
  } catch (error) {
    throw error;
  }
}
