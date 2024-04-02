import styled, { css } from 'styled-components/native';
import { TrashSimple } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;

  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_600}`};
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`;

export const CheckboxButton = styled(Checkbox)``;

export const Title = styled.Text`
  flex: 1;
  margin-left: 12px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
  `};
`;

export const DeleteButton = styled(TouchableOpacity)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
`;

export const DeleteIcon = styled(TrashSimple).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: theme.FONT_SIZE.LG,
}))``;
