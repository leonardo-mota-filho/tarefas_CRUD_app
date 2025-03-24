# **Sistema CRUD de Tasks**

  Um sistema simples de operações CRUD feito com a stack MERN (MongoDB, Express.js, React.js, Node.js) feito com o objetivo de permitir ao usuário gerenciar suas tarefas.
  
## **Requisitos para execução**

  - Docker
  - Npm
  - Node.js
  - React.js
  - MongoDB
    
## **Como Instalar e executar**

  1. Em tarefas_CRUD_app/backend, execute `npm install`
  2. Em tarefas_CRUD_app/frontend, execute `npm install`
  3. Inicie o Docker
  4. Para abrir localmente um database do MongoDB, em tarefas_CRUD_app/backend, execute `docker run --rm -p 27017:27017 mongo`
  5. Para inicializar o servidor localmente, em tarefas_CRUD_app/backend, execute `node .\server.js`
  6. Para inicializar o frontend localmente, em tarefas_CRUD_app/frontend, execute `npm run dev`
  7. Acesse o link do endereço disponibilizado pelo frontend (por padrão *http://localhost:5173/*) e começe a utilizar a aplicação

## **Outras Features que serão implementadas**

  - Sistema de cadastro e login com autenticação de usuário
  - Edição de perfil do usuário
  - Deploy do sistema utilizando Vercel e Render
