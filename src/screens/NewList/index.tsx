import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TextField } from '../../components/TextField';
import { Container, Content, Subtitle, Title } from './styles';

export function NewList() {
  return (
    <Container>
      <Header title="Nova lista" />

      <Content>
        <Title>Nova Lista</Title>
        <Subtitle>crie sua nova lista para adicionar itens</Subtitle>
        <TextField
          placeholder="Digite o nome da lista"
          style={{ marginBottom: 16 }}
        />
        <Button text="criar" />
      </Content>
    </Container>
  );
}
