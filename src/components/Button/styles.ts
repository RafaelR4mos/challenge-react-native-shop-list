import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonVariant = 'primary' | 'danger';

type ButtonStyleType = {
  variant: ButtonVariant;
};

export const Container = styled(TouchableOpacity)<ButtonStyleType>`
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  ${({ theme, variant }) => css`
    background-color: ${variant === 'primary'
      ? theme.COLORS.LIGHT_BLUE
      : theme.COLORS.RED};
  `};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    text-transform: uppercase;
  `};
`;
