import { Text } from 'react-native';
import {
  ButtonContainer,
  Container,
  Content,
  ListCount,
  ListGalery,
  Subtitle,
  Title,
} from './styles';
import { Header } from '../../components/Header';
import { ListCard } from '../../components/ListCard';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Lists() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Minhas listas" />

      <Content>
        <Title>Listas</Title>
        <Subtitle>Adicione listas de compras</Subtitle>

        <ListCount>1 lista cadastrada</ListCount>

        <ListGalery>
          <ListCard
            title="Rancho da semana"
            createdAt="23/03/2024"
            itensQuantity={10}
          />

          <ListCard
            title="Compras no mercadinho"
            createdAt="28/03/2024"
            itensQuantity={4}
          />
        </ListGalery>

        <ButtonContainer>
          <Button
            text="Criar nova lista"
            onPress={() => navigation.navigate('newList')}
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
