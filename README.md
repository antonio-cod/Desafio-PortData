# 📦 PortData API

API REST desenvolvida como parte do processo seletivo para Desenvolvedor Back-End na PortData.

O projeto consiste em uma aplicação para gerenciamento de contatos, permitindo criar, listar, atualizar e remover contatos através de endpoints REST.

# 🚀 Tecnologias Utilizadas

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

# 📁 Estrutura do Projeto

- A aplicação possui uma estrutura simples e organizada por responsabilidades:
<img width="643" height="455" alt="image" src="https://github.com/user-attachments/assets/5cd9e68c-f3a3-436a-80cc-c478357ab993" />



# 🛠️ Instalação de ferramentas/Windons.

1. Primeiro Passo 

     - Você precisa ter a ferramenta Docker instalada no seu sistema operacional para utilizar o "Container" ambiente onde o banco de dados vai ser executado e disponibilizado na aplicação, segue a documentação da instação.
   https://docs.docker.com/desktop/setup/install/windows-install/

    - Recomendado utilizar o VS Code como o editor de codigo você pode baixar.
      
          https://code.visualstudio.com/download

   - Necessário ter o Node.js baixado e configurado na sua maquina.
     
         https://nodejs.org/pt-br/download

   - Caso for clonar o projeto é necessario ter o "Git" instalado e configurado na sua maquina.
     
         https://git-scm.com/install/windows
     

# ▶️ Executar a Aplicação

  2. Segundo passo

  2.1. Você pode clonar o projeto pelo botão "Clone" ou baixar o codigo pelo "Download Zip".
    
<img width="458" height="352" alt="image" src="https://github.com/user-attachments/assets/894860d5-3e19-4f15-9f38-2cda44fa809d" />


  2.2. Abra o projeto pelo VS Code execute no terminal o comando para instalar as dependencia de desenvolvimento.

     npm i 


  2.3. Na raiz do projeto tem o arquivo .env-exemple que você pode renomear para .env nele contem as variaveis de ambiente para o backend executar, exemplo: URL do Banco de Dados.
  
  <img width="372" height="596" alt="image" src="https://github.com/user-attachments/assets/376c4d58-73d4-411f-8616-924241e628be" />
  

 - Variavel NODE_DEV = "dev" esta configurada para no seu console do terminal ver as query os comandos sql executado no banco.


  2.4. Na raiz do projeto existe um arquivo "docker-compose.yml" responsável por subir um container e as configuração do banco de dados.
   
   <img width="367" height="518" alt="image" src="https://github.com/user-attachments/assets/c34862db-042f-4d43-b132-3f02ef478571" />

 2.5. Iniciando o backend no terminal digite.

    npm run dev
    
  - Local
    
        http://localhost:3333

 2.6. Abra o Docker Desktop para inicializar os serviços dele  e no VS Code execute no terminal o comando.
 
      docker-compose up -d
   
 - Vai baixar a image do MySQL e inicializar o container, para ver se o container foi executado pode digitar no terminal
   
        docker ps
   

 2.7. Execute o comando para executar a migration que vai criar as tabelas no banco de dados.
 
   - Você precisa da extenção do prisma instalada no vs code para executar os comandos.
   
<img width="957" height="302" alt="image" src="https://github.com/user-attachments/assets/70b7ee49-f577-48e9-a497-1d573a3a5b5d" />

        npx prisma migrate dev

   - Você pode verificar se as tabelas foi criada utilizando o comando no terminal
   
          npx prisma studio
   
   - Vai ser disponibilizado em tempo de execução uma url que pode ser acessada pelo navegador
   
         http://localhost:5555
   

# 🧪 Executar Testes

O projeto possui testes automatizados utilizando Jest e Supertest.

3. Você pode executar teste para verificar se a aplicação esta Cadastrando, Atualizando, Buscando ou Deletando.
   - Executar testes.
     
         npm test

   - Executar testes em modo desenvolvimento (watch)
     
         npm run test:dev
   


# 📚 Documentação da API (Swagger)

4. A API possui documentação utilizando Swagger (OpenAPI).

- Ela descreve todos os endpoints disponíveis, parâmetros e exemplos de respostas.

- Para acessar a documentação abra um navegador com o backend em execução e digite.
  
      http://localhost:3333/api-docs/


4.1. Na interface do Swagger é possível:

-  visualizar todas as rotas.

-  testar endpoints.

-  ver exemplos de requisição.

-  verificar respostas da API.


