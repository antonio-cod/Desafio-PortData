##📦 PortData API

API REST desenvolvida como parte do processo seletivo para Desenvolvedor Back-End na PortData.

O projeto consiste em uma aplicação para gerenciamento de contatos, permitindo criar, listar, atualizar e remover contatos através de endpoints REST.

##🚀 Tecnologias Utilizadas

Principais tecnologias utilizadas no desenvolvimento:

Node.js

TypeScript

Express

Prisma ORM

MySQL

Docker

Zod (validação de dados)

Swagger / OpenAPI (documentação da API)

Jest (testes automatizados)

Supertest (testes de integração)

##📁 Estrutura do Projeto

A aplicação possui uma estrutura simples e organizada por responsabilidades:
src
│
├── controllers
│ └── Responsáveis por receber as requisições HTTP
│
├── database
│ └── Configuração do Prisma e conexão com o banco
│
├── middlewares
│ └── Middlewares da aplicação (tratamento de erros, etc)
│
├── routes
│ └── Definição das rotas da API
│
├── utils
│ └── Funções utilitárias reutilizáveis
│
└── server.ts
└── Arquivo principal que inicia o servidor

##▶️ Executar a Aplicação

Para iniciar o servidor em modo desenvolvimento: npm run dev

O servidor será iniciado em: http://localhost:3000

##📚 Documentação da API (Swagger)

A API possui documentação utilizando Swagger (OpenAPI).

Ela descreve todos os endpoints disponíveis, parâmetros e exemplos de respostas.

Para acessar a documentação:

Abra no navegador: http://localhost:3000/api-docs

Na interface do Swagger é possível:

visualizar todas as rotas

testar endpoints

ver exemplos de requisição

verificar respostas da API

##🧪 Executar Testes

O projeto possui testes automatizados utilizando Jest e Supertest.

Executar testes:npm test

Executar testes em modo desenvolvimento (watch):npm run test:dev
