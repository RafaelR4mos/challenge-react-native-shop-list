import { useTheme } from 'styled-components/native';
import { InputContainer } from './styles';
import { TextInput, TextInputProps } from 'react-native';

type TextFieldProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function TextField({ inputRef, ...rest }: TextFieldProps) {
  const { COLORS } = useTheme();

  return (
    <InputContainer
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_200}
      {...rest}
    />
  );
}
