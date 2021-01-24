# 4all-backend

## Como executar em modo de desenvolvimento

- Clone o repositório
- Instale as dependências
`yarn install`
- Crie o arquivo com as variáveis de ambiente conforme o arquivo de exemplo `.env.example`. Para ambiente de desenvolvimento nomei o arquivo como `.env.development`
- Execute as migrations
`yarn typeorm migration:run`
- Para iniciar a aplicação execute `yarn dev:server`
- Para visualizar a documentação acesse `http://localhost:5000/docs`
- Para realizar os testes `yarn test`

---
## Como executar em modo de produção

- Clone o repositório
- Instale as dependências
`yarn install`
- Configure as variaveis de ambiente localizadas no arquivo `.env.example`. Altere os caminhos para `./dist` ao invés de `./src` e troque as exetensões de `.ts` para `.js`
- Configure o `NODE_ENV` para `production`
- Execute o build `yarn build`
- Execute as migrations
`yarn build:migrations`
- Para iniciar a aplicação execute `yarn start`
- Para visualizar a documentação acesse `http://localhost:5000/docs`

---
## Como executar em modo de produção utilizando o docker

- Clone o repositório
- Execute docker-compose up
- Para visualizar a documentação acesse `http://localhost:5000/docs`
