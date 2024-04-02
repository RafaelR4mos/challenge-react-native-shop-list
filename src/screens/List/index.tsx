import { Alert, FlatList, Text } from 'react-native';
import {
  AddButton,
  AddIcon,
  AddItemForm,
  Container,
  Content,
  ItemsHeaderContainer,
  ItemsQuantity,
  ItemsTitle,
  Subtitle,
  Title,
} from './styles';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import { ShoppingItem, ShoppingList } from '../Lists';
import { Header } from '../../components/Header';
import { TextField } from '../../components/TextField';
import { ListEmpty } from '../../components/ListEmpty/indes';
import { Button } from '../../components/Button';
import { listDelete } from '../../storage/list/listDelete';
import { ListItem } from '../../components/ListItem';
import { useCallback, useState } from 'react';
import uuid from 'react-native-uuid';
import { itemCreateByList } from '../../storage/items/itemCreateByList';
import { itemGetByList } from '../../storage/items/itemGetByList';
import { AppError } from '../../utils/AppError';
import { itemDeleteByList } from '../../storage/items/itemDeleteByList';
import { itemCheckByList } from '../../storage/items/itemCheckByList';

type RouteParams = {
  listData: ShoppingList;
};

export function List() {
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { listData } = route.params as RouteParams;

  async function deleteList() {
    try {
      await listDelete(listData.id);
      navigation.navigate('lists');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteList() {
    Alert.alert('Deletar lista', 'Você deseja remover esta lista de compras?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', style: 'destructive', onPress: () => deleteList() },
    ]);
  }

  async function fetchItemsByList() {
    try {
      const itemsDataFromStorage = await itemGetByList(listData.id);
      setItems(itemsDataFromStorage);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCheckItem(itemIdToCheck: string, listId: string) {
    try {
      await itemCheckByList(itemIdToCheck, listId);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Marcar um item', error.message);
      } else {
        console.log(error);
      }
    }
  }

  async function handleDeleteItem(itemIdToDelete: string, listId: string) {
    try {
      await itemDeleteByList(itemIdToDelete, listId);
      await fetchItemsByList();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Deletar item', error.message);
      }
      console.log(error);
    }
  }

  async function handleAddNewItem(itemText: string) {
    try {
      if (itemText.length < 2) {
        return Alert.alert(
          'Criação de item',
          'Não é possível criar um item com menos de 2 letras.'
        );
      }

      const id = uuid.v4() as string;

      const newItem: ShoppingItem = {
        itemId: id,
        text: itemText,
        checked: false,
      };

      setItemText('');
      await itemCreateByList(newItem, listData.id);
      await fetchItemsByList();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Criação de item', error.message);
      } else {
        console.log(error);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchItemsByList();
    }, [])
  );

  return (
    <Container>
      <Header
        showBackIcon
        title="Lista"
      />

      <Content>
        <Title>{listData.title}</Title>
        <Subtitle>Adicione itens a lista de compras</Subtitle>

        <AddItemForm>
          <TextField
            placeholder="Adicione um novo item"
            value={itemText}
            onChangeText={setItemText}
          />
          <AddButton onPress={() => handleAddNewItem(itemText)}>
            <AddIcon />
          </AddButton>
        </AddItemForm>

        <ItemsHeaderContainer>
          <ItemsTitle>Compras</ItemsTitle>
          <ItemsQuantity>{`Items: ${
            items.length ? items.length : listData.items.length
          }`}</ItemsQuantity>
        </ItemsHeaderContainer>

        <FlatList
          data={items}
          keyExtractor={({ itemId }) => itemId}
          renderItem={({ item }) => (
            <ListItem
              itemData={item}
              onDelete={() => handleDeleteItem(item.itemId, listData.id)}
              onCheck={() => handleCheckItem(item.itemId, listData.id)}
            />
          )}
          contentContainerStyle={{ gap: 12 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Não Há nenhum item adicionado a lista. Adicione agora mesmo!" />
          )}
        />

        <Button
          text="remover lista"
          variant="danger"
          onPress={handleDeleteList}
        />
      </Content>
    </Container>
  );
}
