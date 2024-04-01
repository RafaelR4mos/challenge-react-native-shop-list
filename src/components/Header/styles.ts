import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 110px;
  border-radius: 0 0 16px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  margin-bottom: 36px;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
