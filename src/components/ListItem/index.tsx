import { useEffect, useState } from 'react';
import { ShoppingItem } from '../../screens/Lists';
import {
  Container,
  CheckboxButton,
  DeleteButton,
  DeleteIcon,
  Title,
} from './styles';

type ListItemProps = {
  itemData: ShoppingItem;
};

export function ListItem({ itemData }: ListItemProps) {
  const [isChecked, setChecked] = useState(itemData.checked);

  useEffect(() => {
    //handleCheckItem
  }, [isChecked]);

  return (
    <Container>
      <CheckboxButton
        value={isChecked}
        onValueChange={setChecked}
      />
      <Title>{itemData.text}</Title>
      <DeleteButton>
        <DeleteIcon />
      </DeleteButton>
    </Container>
  );
}
