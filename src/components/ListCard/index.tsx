import {
  BasketIcon,
  CardBadgeContainer,
  CardBadgeText,
  CardSubtitle,
  CardTitle,
  Container,
} from './styles';

import { TouchableOpacityProps } from 'react-native';

type ListCardProps = TouchableOpacityProps & {
  title: string;
  createdAt: string;
  itensQuantity: number;
};

export function ListCard({
  title,
  createdAt,
  itensQuantity,
  ...rest
}: ListCardProps) {
  return (
    <Container {...rest}>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{`Criada em: ${createdAt}`}</CardSubtitle>

      <BasketIcon />

      {/* <CardBadgeContainer>
        <CardBadgeText>{`${itensQuantity} itens`}</CardBadgeText>
      </CardBadgeContainer> */}
    </Container>
  );
}
