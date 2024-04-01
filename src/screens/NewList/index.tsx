import { useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TextField } from '../../components/TextField';
import { Container, Content, ListAddIcon, Subtitle, Title } from './styles';
import uuid from 'react-native-uuid';
import { ShoppingList } from '../Lists';
import { listCreate } from '../../storage/list/listCreate';
import { Alert } from 'react-native';
import { AppError } from '../../utils/AppError';
import { useNavigation } from '@react-navigation/native';

export function NewList() {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  async function handleCreateList(listTitle: string) {
    const id = uuid.v4() as string;
    const date = new Date();

    const newList: ShoppingList = {
      id: id,
      title: listTitle,
      createdAt: date.toLocaleDateString('pt'),
      items: [],
    };

    try {
      await listCreate(newList);
      navigation.navigate('lists');
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Criação de lista', error.message);
      }
      console.log(error);
    }
  }

  return (
    <Container>
      <Header
        title="Nova lista"
        showBackIcon
      />

      <Content>
        <ListAddIcon />
        <Title>Nova Lista</Title>
        <Subtitle>crie sua nova lista para adicionar itens</Subtitle>
        <TextField
          placeholder="Digite o nome da lista"
          onChangeText={setText}
          style={{ marginBottom: 16 }}
        />
        <Button
          text="criar"
          disabled={text.length < 3}
          style={text.length < 3 && { opacity: 0.6 }}
          onPress={() => handleCreateList(text)}
        />
      </Content>
    </Container>
  );
}
