import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { Plus } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.LIGHT_BLUE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
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

export const Content = styled.View`
  flex: 1;
  padding: 0 16px 25px;
`;

export const AddItemForm = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const AddButton = styled(TouchableOpacity)`
  max-height: 55px;
  min-height: 55px;

  max-height: 55px;
  min-width: 55px;

  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;

export const ItemsHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 32px 0;
`;

export const ItemsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;

export const ItemsQuantity = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: theme.FONT_SIZE.MD,
}))``;
