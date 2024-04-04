# Challenge: Projeto Shop List

Projeto de lista de compras com `React Native` e `Expo`.

## ⚙ Para utilizar o projeto

1. Execute o clone no seu terminal.

```bash
git clone https://github.com/RafaelR4mos/challenge-react-native-shop-list.git 
```

2. Instale as dependências do projeto mapeadas em `package.json`

```bash
npm install
```

3. Execute o comando de execução do projeto

```bash
npm run start
```

---

## 💡 Insights sobre as tecnologias trabalhadas

### Phosphor Icons React Native

Usar a biblioteca de ícones para a versão do RN.

```bash
npm install phosphor-react-native
```

Uso dos ícones:

```
import { Basket } from 'phosphor-react-native'

export function Componente() {
  return (
    <Basket 
      size={32}
      color="#FFFFFF"
      weight='bold'
    /> 
  )
}
 
```

### Styled Components React Native

Componentes estilizados e utilização de temas. **A maior diferença para a versão WEB fica na tipagem e apontamento para a versão RN**

#### Importação e Utilização

```ts
//styles.ts

import 'styled-components/native';

export const Container = styled.View`
  color: red;
`;
```

#### Tipagem do tema:

```ts
//tipagem
import 'styled-components/native';
import theme from '../theme'; //caminho do tema

//importante usar o '/native' aqui também.
declare module 'styled-components/native' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
```

#### Adicionando estilização em atributos com `attrs`

Para que seja possível consumir o tema da aplicação e não precisar estilizar no próprio arquivo `.tsx` podemos usar no `styles.ts` o seguinte código:

```ts
//Aqui mudamos os atributos 'size' e 'color' através do arquivo de estilização
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
```

---

### União de tipos com `type` no Typescript

Caso criarmos um componente personalizado e também seja necessário extender a tipagem do componente nativo, podemos utilizar como base o código:

```ts
//Importa tipagem do touchable opacity que vem do RN
import { TouchableOpacityProps } from 'react-native';

//Com o caractere '&' adiciona os tipos nativos + o que for definido entre chaves
type GroupCardProps = TouchableOpacityProps & {
  title: string;
};
```

### CSS Helper do StyledComponents

Quando há o uso de muitas variáveis como `theme`, `type`, `variant` e outras em um componente só pode ser que o `css` helper do styled-components contribua em termos de simplificar a sintaxe.

```ts
import styled, { css } from 'styled-components/native';

//Com isso `theme` não precisa ser desestruturado em todas propriedades.
export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
```

### Navegação com React Navigate

1. Instalar a biblioteca core React Navigation

```bash
npm install @react-navigation/native
```

2. Instalar dependências para projetos `expo`

```bash
npx expo install react-native-screens react-native-safe-area-context
```

3. Instalar a estratégia de navegação (Stack, Drawer, Tab)

```bash
npm install @react-navigation/native-stack
```

2. Declarando o `contexto` das rotas e `rotas`:

`routes/app.routes.tsx`

```tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MyLists } from '../screens/MyyList';

const { Navigator, Screen } = createNativeStackNavigator();

//Navigator --> Envolve as rotas
//Screen --> Rota individual com nome e apontando para componente
export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="myLists"
        component={MyLists}
      />
    </Navigator>
  );
}
```

3. Expondo as rotas na hierarquia da aplicação

`index.tsx`

```tsx
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { AppRoutes } from './app.routes';
import { View } from 'react-native';

export function Routes() {
  const { COLORS } = useTheme();

  //NavigationContainer --> Fornece o contexto de navegação para o app.
  // * A estilização da view remove o glitch effect ao trocar de página.

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
```

#### Tipando as rotas em `@types/`

É interessante tipar quais rotas existem na nossa aplicação e principalmente quais `params` são esperados em cada uma das rotas

1. Criar um arquivo `navigation.d.ts`

2. Reescrever a tipagem do módulo no arquivo

```ts
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      myLists: undefined;
      newList: undefined;
      list: {
        listName: string;
      };
    }
  }
}
```

#### Enviando e consumindo um parâmetro de rota

Em alguns momentos precisamos trocar informações entre páginas da nossa aplicação, para isso, podemos utilizar a lib `react-navigation` e seus hooks

1. Importe o hook `useNavigation()`

```ts
import { useNavigation } from '@react-navigation/native';
```

2. Declare a referência para o hook em uma variável

```ts
const navigation = useNavigation();
```

3. Para navegar e enviar parâmetros use `navigate`

```ts
navigation.navigate('route', { state });
```

4. Para receber parâmetros:

É importante utilizar o hook `useRoute`, que também vem do `react-navigation`. Neste é possível desestruturar os parâmetros de dentro de `route.params` o ideial também é tipar QUAIS são estes params com o alias "as" + tipagem

```ts
const route = useRoute();
const { param } = route.params as RouteParams;
```

#### Usando `useFocusEffect` para foco na página

`useFocusEffect` é bastante similar ao `useEffect`, entretanto ele é ativado sempre que a página recebe foco, ou seja: **Além do 1o carregamento ele é invocado caso ocorra uma navegação para a página**

Importação:

```ts
import { useFocusEffect } from '@react-navigation/native';
```

Uso:

```ts
useFocusEffect(
  useCallback(() => {
    fetchLists();
  }, [])
);
```

> `useCallBack` é usado juntamente para não disparar renderizações desnecessárias, o que pode ajudar na **Performance da aplicação.**

---

### Async Storage - React Native

Similar ao localStorage do Browser. Pode ajudar a resolver problemas de `prop-drilling` uma vez que, centraliza informações em um lugar.

Instalação:

```
 npx expo instal @react-native-async-storage/async-storage
```

#### Organização e manipulações com o Async storage

A dinâmica de lidar com `AsyncStorage`, similar ao localStorage, porém **Assíncrono** é diferente e há um padrão que pode ser utilizado.

1. Criação de uma pasta somente para isso `storage`

2. Criação de um arquivo `storageConfig.ts` para definir keys do storage

Com isso, garantimos uma melhor manutenção nas keys dos elementos salvos no `AsyncStorage`

```ts
const LIST_COLLECTION = '@shop-list:lists';
const ITEM_COLLECTION = '@shop-list:items';

export { LIST_COLLECTION, ITEM_COLLECTION };
```

3. Para cada entidade, podemos criar uma pasta e vincular as funções que buscam no storage por arquivo.

Exemplo: player

Arquivos:

|-list
|listCreate.ts
|listDelete.ts
|listGetAll.ts
|listGetSingle.ts

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIST_COLLECTION } from '../storageConfig';
import { ShoppingList } from '../../screens/Lists';
import { listsGetAll } from './listGetAll';
import { AppError } from '../../utils/AppError';

export async function listCreate(newList: ShoppingList) {
  try {
    const storedLists = await listsGetAll();

    const listAlreadyExists = storedLists
      .map((item: ShoppingList) => item.title)
      .includes(newList.title);

    if (listAlreadyExists) {
      throw new AppError('Já existe uma lista com este nome.');
    }

    const newStorage = JSON.stringify([...storedLists, newList]);
    await AsyncStorage.setItem(LIST_COLLECTION, newStorage);
    console.log(storedLists);
  } catch (error) {
    throw error;
  }
}
```

---

### Usando `useRef()` para lidar com elementos

Podemos utilizar o hook useRef() para acessar a **referência de um elemento**, e assim, lidar com `focus()`, `blur()`, dentre outros.

Exemplo: Ao submeter um formulário podemos usar `blur()` no elemento de input, afinal, o usuário já digitou o que era necessário, assim o efeito de `desfoque` pode encerrar o teclado aberto e remover o foco para o input.

```ts
//Criação da referência de vinculação
const newListNameInputRef = useRef<TextInput>(null);

function handleSubmit() {
  ///...

  //Desfoca o elemento
  newListNameInputRef.current?.blur();
}

//IMPORTANTE adicionar o `ref` ao elemento, caso seja um componente é necessário enviar via prop.
return (
  <View>
    <Input
      inputRef={newListNameInputRef}
      onChangeText={setNewListName}
      value={newListName}
      placeholder="Nome da sua lista"
      autoCorrect={false}
      onSubmitEditing={handleAddList}
      returnKeyType="done"
    />
  </View>
);
```

---

### Utilizando uma classe personalzida para erro

Para que podemos distinguir um erro genérico/desconhecido provido por um `throw` e um erro reconhecido pela nossa aplicação podemos criar uma classe com um atributo `message` e instanciar esta classe, assim podemos recolher a `instaceof <classe>` dentro do bloco `catch`.

Exemplo:

1. Classe de erro personalizada: (/utils/AppError.ts)

```ts
export class AppError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
```

2. Instanciação da classe

```ts
throw new AppError('Estas lista já esta adicionada!');
```

3. Conferir a instaciação do erro. Caso a instância não corresponda a classe que criamos, neste caso, terá de ser lançado um erro genérico.

```ts
 catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova lista', error.message);
      } else {
        Alert.alert('Nova lista', 'Não foi possível adicionar');
        console.error(error);
      }
    }
```

---
Por: Rafael Ramos 💙
