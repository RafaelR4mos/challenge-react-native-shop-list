import { Container, HeaderTitle } from './styles';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
}
