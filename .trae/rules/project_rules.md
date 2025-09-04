# Fincheck Web - Regras do Projeto

## Stack Tecnológica

- **Frontend**: React 19.1.0
- **Build Tool**: Vite
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS
- **Gerenciador de Pacotes**: PNPM
- **Gerenciamento de Estado**:
  - React Query (estado do servidor)
  - React Context (estado global)
  - useState/useReducer (estado local)
- **Formulários**: React Hook Form + Zod
- **Roteamento**: React Router DOM
- **HTTP Client**: Axios

## Estrutura do Projeto

### Organização de Arquivos

- **src/app**: Lógica de negócios e serviços
  - **config**: Configurações da aplicação
  - **contexts**: Contextos React para estado global
  - **hooks**: Hooks personalizados
  - **services**: Serviços de API

- **src/ui**: Interface do usuário
  - **components**: Componentes reutilizáveis
  - **layouts**: Layouts da aplicação
  - **pages**: Páginas da aplicação

- **src/utils**: Utilitários e funções auxiliares

- **src/Router**: Configuração de rotas

- **src/assets**: Recursos estáticos (imagens, ícones, etc.)

### Convenções de Nomenclatura

- **Componentes**: PascalCase (ex: Button.tsx)
- **Hooks**: camelCase com prefixo 'use' (ex: useAuth.ts)
- **Contextos**: PascalCase com sufixo 'Context' (ex: AuthContext.tsx)
- **Serviços**: PascalCase com sufixo 'Service' (ex: AuthService)
- **Utilitários**: camelCase (ex: formatCurrency.ts)

### Aliases de Importação

- **@/**: Aponta para o diretório 'src/'

## Padrões de TypeScript e React

### Tipagem

- Use aliases de tipo para props de componentes
- Estenda `ComponentProps<'element'>` para componentes que estendem elementos HTML
- Type `children` com `ReactNode` para componentes que aceitam children
- Defina tipos para todas as props, incluindo props opcionais

### Componentes

- Use declarações de função para componentes, não arrow functions
- Extraia lógica complexa para custom hooks
- Prefira componentes controlados para formulários
- Use memoização (React.memo, useMemo, useCallback) quando necessário

### Hooks

- Extraia lógica reutilizável para custom hooks
- Nomeie hooks com prefixo 'use'
- Retorne um objeto com valores e funções nomeadas
- Chame hooks apenas no nível superior de componentes ou custom hooks
- Não chame hooks dentro de condições, loops ou funções aninhadas

### Gerenciamento de Estado

- **Estado do Servidor**: Use React Query
- **Estado Global**: Use React Context
- **Estado Local**: Use useState ou useReducer
- **Formulários**: Use React Hook Form com Zod para validação

## Padrões de Componentes

### Componentes Reutilizáveis

- Armazenados em `src/ui/components/`
- Nomenclatura em PascalCase
- Use type aliases com `ComponentProps<'element'>` para estender props nativas
- Use o utilitário `cn()` para composição de classes Tailwind

### Componentes de Página

- Armazenados em `src/ui/pages/`
- Cada página tem sua própria pasta (ex: `Dashboard/`, `Login/`)
- Arquivo principal `index.tsx` contém o componente principal da página
- Use hooks personalizados para lógica (ex: `useLoginController.ts`)
- Componentes específicos da página em `components/`
- Modais específicos da página em `modals/`

### Padrões de Contexto

- Nomenclatura em PascalCase com sufixo 'Context'
- Defina o tipo do contexto, crie o contexto, e implemente o Provider
- Use `useState`, `useCallback` e `useMemo` para valores e funções
- Exporte o contexto e o Provider
- Crie hooks dedicados para acessar contextos

## Estilização com TailwindCSS

### Utilitário de Classes

- Use o utilitário `cn()` de `@/utils/cn.ts` para composição de classes
- Combina clsx + tailwind-merge para classes condicionais e resolução de conflitos

### Paleta de Cores Personalizada

- **Primary**: `teal-*` (cor principal da marca)
- **Success**: `green-*`
- **Error**: `red-*`
- **Neutral**: `gray-*`

### Tipografia

- **Família de Fonte**: DM Sans (configurada no Tailwind)
- **Tamanhos de Fonte**: Use as classes padrão do Tailwind (`text-xs`, `text-sm`, etc.)
- **Pesos de Fonte**: Use as classes padrão do Tailwind (`font-normal`, `font-medium`, etc.)

### Responsividade

- Use os breakpoints padrão do Tailwind (`sm`, `md`, `lg`, `xl`, `2xl`)
- Projete para mobile-first, adicionando modificadores para telas maiores

### Boas Práticas

- Evite usar estilos inline
- Prefira classes utilitárias do Tailwind em vez de CSS personalizado
- Mantenha a consistência em todo o projeto
- Use variáveis CSS para valores que podem mudar
- Extraia padrões comuns para componentes reutilizáveis

## Arquitetura de Serviços de API

### Organização de Serviços

- Serviços organizados em pastas dedicadas em `src/app/services/`
- Cada serviço tem sua própria pasta (ex: `AuthService/`)
- Arquivo principal `index.ts` exporta todos os métodos
- Métodos individuais em arquivos separados (ex: `sign-in.ts`)

### Configuração do Cliente API

- Configuração base da API em `api.ts`
- Usa Axios com interceptors para tokens de autenticação
- Tratamento de erro consistente em todos os serviços

### Integração com React Query

- Todas as chamadas de API devem usar React Query
- Defina chaves de query em `react-query-keys.ts`
- Use nomenclatura consistente: `users.me()`, `auth.signIn()`, etc.

### Tipagem

- Defina tipos para parâmetros e respostas de API
- Use interfaces para tipos de entidades
- Use type aliases para parâmetros de métodos

## Gerenciamento de Estado e Fluxo de Dados

### Validação de Dados

- **Zod**: Utilizado para validação de dados e tipagem
- **Schemas**: Defina schemas para validação de formulários e dados da API
- **Integração**: Use `@hookform/resolvers/zod` para integrar com React Hook Form

### Persistência de Dados

- **localStorage**: Utilizado para persistir dados entre sessões (ex: token de autenticação)
- **React Query**: Configure `cacheTime` para persistência em memória
- **Cookies**: Use para dados sensíveis que precisam ser enviados ao servidor

### Fluxo de Autenticação

- **Token JWT**: Armazenado em localStorage
- **Interceptor Axios**: Adiciona token automaticamente às requisições
- **Refresh Token**: Implementado para renovação automática de sessão
- **Logout**: Limpa token e redireciona para página de login

### Tratamento de Erros

- **React Query**: Use `onError` para tratamento de erros em queries e mutations
- **Toast**: Use react-hot-toast para notificações de erro ao usuário
- **Fallbacks**: Implemente estados de fallback para componentes com erro
- **Retry**: Configure política de retry para queries importantes

## Roteamento e Navegação

### Estrutura de Rotas

- **Definição de Rotas**: Centralizada em `src/Router/index.tsx`
- **Rotas Protegidas**: Implementadas com `AuthGuard` para verificação de autenticação
- **Rotas Públicas**: Acessíveis sem autenticação (login, registro)
- **Redirecionamentos**: Configurados para rotas não encontradas e estados de autenticação

### Padrões de Navegação

- **useNavigate**: Hook do React Router para navegação programática
- **Link/NavLink**: Componentes do React Router para navegação declarativa

### Layouts

- **Layout de Autenticação**: Usado para páginas de login e registro
- **Layout do Dashboard**: Usado para todas as páginas após autenticação

## Acessibilidade e Internacionalização

### Acessibilidade (A11y)

- **Elementos Semânticos**: Use elementos HTML semânticos apropriados
- **Landmarks**: Utilize landmarks ARIA quando necessário
- **Foco Visível**: Não remova o outline de foco sem fornecer uma alternativa
- **Labels**: Associe labels a campos de formulário
- **Alt Text**: Forneça texto alternativo para imagens
- **ARIA**: Use atributos ARIA apropriados para componentes complexos

### Internacionalização (i18n)

- **Chaves de Tradução**: Use chaves hierárquicas para organizar traduções
- **Formatação**: Formate números, datas e moedas de acordo com a localidade
- **RTL**: Suporte a idiomas da direita para a esquerda quando necessário

## Ferramentas de Desenvolvimento

### Scripts Disponíveis

- `pnpm dev` - Iniciar servidor de desenvolvimento
- `pnpm build` - Build para produção
- `pnpm lint` - Executar ESLint
- `pnpm lint:fix` - Corrigir problemas do ESLint
- `pnpm format` - Formatar código com Prettier
- `pnpm preview` - Visualizar build de produção

### Ferramentas de Qualidade de Código

- **ESLint**: TypeScript, React Hooks e integração com Prettier
- **Prettier**: Formatação de código com plugin Tailwind para ordenação de classes
- **TypeScript**: Modo estrito habilitado para melhor segurança de tipos

### Boas Práticas

- Execute `pnpm lint:fix` antes de commits
- Use o modo estrito do TypeScript
- Aproveite o React Query DevTools para depuração
- Siga as convenções estabelecidas de nomenclatura de arquivos
- Use mensagens de commit semânticas (Conventional Commits)

### Otimização de Performance

- Use React.memo para componentes que renderizam frequentemente
- Use useCallback e useMemo para funções e valores computados
- Otimize re-renderizações com React DevTools Profiler
- Implemente code splitting com React.lazy e Suspense