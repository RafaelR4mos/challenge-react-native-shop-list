import { BackButton, BackIcon, Container, HeaderTitle } from './styles';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  title: string;
  showBackIcon?: boolean;
};

export function Header({ title, showBackIcon }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('lists');
  }

  return (
    <Container>
      {showBackIcon && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
}
