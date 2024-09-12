# Desafio Front-end - tasks-list-starter

### O desafio
Você tem várias tarefas diárias e não tem um aplicativo que te ajude a controlar o  andamento delas. Para isso, resolveu criar um aplicativo de Lista de tarefas.
Esse aplicativo deve ter a possibilidade de criar listas e dentro delas adicionar tarefas.  Deve ser possível editá-las, remover e alterar o status da tarefa, como concluir uma  tarefa, por exemplo.

### Requisitos
* Utilizar JSON Server como um fake REST API.
* Utilizar Javascript com jQuery.
* Utilizar o Bootstrap como folha de estilo base.

### Como começar?
* Crie o seu projeto a partir do https://github.com/jhonnytuba/tasks-list-starter/.
  * Antes de tudo, use `npm i` para instalar as dependências.
  * Para subir o servidor em modo de desenvolvimento, use `npm run dev` e então acesse `http://127.0.0.1:8082/`.
* Instale globalmente o JSON Server.
* Copie o arquivo db.json existente no outro arquivo anexo para seu projeto.
* Rode seu fake REST API com este comando json-server --delay 500 db.json.
  * Este comando criará um delay de 500ms nas chamadas, com isso, é possível simular uma aplicação real.
* db.json:
`{ "lists": [{ "id": 1, "title": "Mercado" },{ "id": 2, "title": "Trabalho" }], 
"tasks": [{ "id": 1, "listId": 1, "title": "Comprar arroz" },
{ "id": 2, "listId": 1, "title": "Comprar feijão" },
{ "id": 3, "listId": 2, "title": "Reunião às 10:00" }] }`
* Seu fake REST API estará disponível na porta http://localhost:3000

### Estrutura dos arquivos
No diretório public estão os arquivos `index.html` e `styles.css` e no diretório src está o arquivo `main.js`.

Após isso é só codar!


# Instale a versão 0.15.0 do json-server, utilizando o comando: npm install -g json-server@0.15.0
# Instale o jquery, utilizando o comando: yarn add jquery
# Instale o bootstrap, utilizando o comando: yarn add bootstrap
# Rode o fake REST API, utilizando o comando: json-server --delay 500 db.json

