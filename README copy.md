# Resumo do Projeto

## Objetivo
Este projeto é uma aplicação para cálculo de IMC e triagem de glicemia de jejum. O objetivo é permitir que os usuários visualizem como estão seus parâmetros de saúde nesses aspectos. Ele realiza o cálculo do IMC e a triagem da glicemia de jejum, já que ambos são importantes para a saúde, seja para fins de condicionamento físico ou para casos que necessitem de Ozempic, outros medicamentos ou acompanhamento médico.

## Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Styled-components, Material UI, Axios, React Internationalização, Jest.

## Como Executar o Projeto

1. Clone o repositório do projeto.
2. Certifique-se de que o Docker está em execução.

### No backend, utilize os seguintes comandos:
- `mvn clean install` para compilar o projeto.
- `docker-compose up` para iniciar o banco de dados.
- `docker ps` para verificar os containers em andamento.
- `mvn spring-boot:run` para iniciar o projeto.
- `mvn test` para rodar os testes.

### No frontend, execute os comandos:
- `yarn install` ou `npm install` para instalar as dependências.
- `yarn start` ou `npm start` para iniciar o servidor de desenvolvimento.
- `yarn test` para rodar os testes.

Acesse a aplicação em [http://localhost:3000](http://localhost:3000).