import AsyncStorage from '@react-native-async-storage/async-storage';

import { LIST_COLLECTION } from '../storageConfig';

export async function listsGetAll() {
  try {
    const storedLists = await AsyncStorage.getItem(LIST_COLLECTION);

    const lists = storedLists ? JSON.parse(storedLists) : [];

    return lists;
  } catch (error) {
    throw error;
  }
}
