import { ButtonText, ButtonVariant, Container } from './styles';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  text: string;
  variant?: ButtonVariant;
};

export function Button({ text, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <Container
      variant={variant}
      {...rest}
    >
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
