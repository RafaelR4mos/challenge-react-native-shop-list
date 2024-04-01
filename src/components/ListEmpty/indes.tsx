import { Container } from '../../screens/List/styles';
import { Message } from './styles';

type ListEmptyProps = {
  message: string;
};

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
