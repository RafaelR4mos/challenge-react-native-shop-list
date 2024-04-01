import { FlatList, Text } from 'react-native';
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

type RouteParams = {
  listData: ShoppingList;
};

export function List() {
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { listData } = route.params as RouteParams;

  async function handleDeleteList() {
    try {
      await listDelete(listData.id);
      navigation.navigate('lists');
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchItemsByList() {
    try {
      const itemsDataFromStorage = await itemGetByList(listData.id);
      setItems(itemsDataFromStorage);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddNewItem(itemText: string) {
    const id = uuid.v4() as string;

    const newItem: ShoppingItem = {
      itemId: id,
      text: itemText,
      checked: false,
    };

    await itemCreateByList(newItem, listData.id);

    setItemText('');

    await fetchItemsByList();
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
            onChangeText={setItemText}
          />
          <AddButton onPress={() => handleAddNewItem(itemText)}>
            <AddIcon />
          </AddButton>
        </AddItemForm>

        <ItemsHeaderContainer>
          <ItemsTitle>Compras</ItemsTitle>
          <ItemsQuantity>{`Items: ${listData.items.length}`}</ItemsQuantity>
        </ItemsHeaderContainer>

        <FlatList
          data={items}
          keyExtractor={({ itemId }) => itemId}
          renderItem={({ item }) => <ListItem itemData={item} />}
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
