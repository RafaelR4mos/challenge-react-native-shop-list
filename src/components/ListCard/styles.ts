import styled, { css } from 'styled-components/native';
import { Basket } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  min-height: 100px;
  max-height: 100px;
  width: 100%;
  position: relative;

  padding: 20px 25px 12px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_600}`};
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const CardSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XSM}px;
  `}
`;

export const CardBadgeContainer = styled.View`
  min-width: 75px;
  max-width: 75px;

  position: absolute;
  bottom: 12px;
  left: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;

export const CardBadgeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XSM}px;
  `}
`;

export const BasketIcon = styled(Basket).attrs(({ theme }) => ({
  color: theme.COLORS.BLACK,
  size: 25,
  weight: 'bold',
}))`
  position: absolute;
  right: 25px;
  top: 27px;
`;
