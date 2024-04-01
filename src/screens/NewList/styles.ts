import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { ListPlus } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.LIGHT_BLUE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 25px 200px;
  justify-content: center;
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  margin-bottom: 40px;
`;

export const ListAddIcon = styled(ListPlus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: theme.FONT_SIZE.XL,
  weight: 'bold',
}))`
  align-self: center;
  margin-bottom: 8px;
`;
