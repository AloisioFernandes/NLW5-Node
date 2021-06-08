# NLW5 - Trilha Node - Chat
Aplicação feita durante o evento Next Level Week 05 da [Rocketseat](https://rocketseat.com.br/) de 19/04/2021 - 25/04/2021. A aplicação é feita em Node.js com Express e WebSocket para comunicação em tempo real.
<p>O usuário pode acessar a rota do cliente para entrar em contato com um administrador e iniciar o atendimento.</p> 
<p>O administrador tem acesso à lista de usuários que estão esperando atendimento. Ao escolher um cliente, a troca de mensagens ocorre em tempo real por meio do protocolo WebSocket</p>

# Cliente
<p align="center">
  <p><img align="center" src=".github/Chat Start.png" alt="Chat Start" width="800" border="0"></p>
  <p><img align="center" src=".github/Chat Messages.png" alt="Chat Messages" width="800" border="0"></p>
</p>

# Administrador
<p align="center">
  <p><img align="center" src=".github/Chat Admin.png" alt="Chat Admin" width="800" border="0"></p>
</p>

# Funcionalidades
 - Cadastro de usuários em banco de dados
 - Troca de mensagens em tempo real
 - Listagem de usuários sem atendimento

# Utilizar projeto
## Requisitos
    Instalar o Git
    https://git-scm.com/downloads

    Instalar o NodeJs
    https://nodejs.org/en/

    Instalar o Yarn
    https://classic.yarnpkg.com/en/docs/install/#debian-stable

## Primeiro passo - baixar o projeto
Faça download do repositório acima ou use o seguinte comando na pasta onde deseja baixar o projeto:
 - git clone https://github.com/AloisioFernandes/NLW5-Node.git

## Segundo passo - instalar dependências
Digite o seguinte comando dentro da pasta projet_nlw através do terminal:
 - yarn install

## Terceiro passo - executar migrations
Ainda na pasta projet_nlw, digite o seguinte comando no terminal:
 - yarn typeorm migration:run.

## Quarto passo - iniciar servidor
Ainda na pasta projet_nlw, digite o seguinte comando no terminal:
 - yarn dev

## Quinto passo - acessar projeto
Na aba do navegador, acesse oserviço do cliente pelo endereço: http://localhost:3333/pages/client
O serviço de administrador pode ser acessado por: http://localhost:3333/pages/admin

# Principais Tecnologias
 - [Node.js](https://nodejs.org/en/)
 - [Express](https://expressjs.com/en/starter/installing.html)
 - [TypeORM](https://typeorm.io/#/)
 - [SQLite](https://www.sqlite.org/index.html)
 - [WebSocket](https://socket.io/docs/v4)