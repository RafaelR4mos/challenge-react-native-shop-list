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
  onDelete: () => void;
  onCheck: () => void;
};

export function ListItem({ itemData, onDelete, onCheck }: ListItemProps) {
  const [isChecked, setChecked] = useState(itemData.checked);

  return (
    <Container>
      <CheckboxButton
        value={isChecked}
        onValueChange={() => {
          setChecked((state) => !state);
          onCheck();
        }}
      />
      <Title style={isChecked && { textDecorationStyle: 'dotted' }}>
        {itemData.text}
      </Title>
      <DeleteButton onPress={onDelete}>
        <DeleteIcon />
      </DeleteButton>
    </Container>
  );
}
