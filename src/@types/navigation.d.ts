import { ShoppingList } from '../screens/Lists';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      lists: undefined;
      newList: undefined;
      list: {
        listData: ShoppingList;
      };
    }
  }
}
