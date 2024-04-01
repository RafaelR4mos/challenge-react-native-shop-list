import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
  padding: 0 25px 100px;
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