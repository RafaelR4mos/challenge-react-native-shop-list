import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const InputContainer = styled(TextInput)`
  min-height: 50px;
  max-height: 50px;
  flex: 1;

  border-radius: 4px;
  padding: 12px 12px;

  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_200}`};
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
