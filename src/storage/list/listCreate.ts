import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIST_COLLECTION } from '../storageConfig';
import { ShoppingList } from '../../screens/Lists';
import { listsGetAll } from './listGetAll';
import { AppError } from '../../utils/AppError';

export async function listCreate(newList: ShoppingList) {
  try {
    const storedLists = await listsGetAll();

    const listAlreadyExists = storedLists
      .map((item: ShoppingList) => item.title)
      .includes(newList.title);

    if (listAlreadyExists) {
      throw new AppError('Já existe uma lista com este nome.');
    }

    const newStorage = JSON.stringify([...storedLists, newList]);
    await AsyncStorage.setItem(LIST_COLLECTION, newStorage);
    console.log(storedLists);
  } catch (error) {
    throw error;
  }
}
