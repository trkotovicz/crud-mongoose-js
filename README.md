# CRUD - Mongoose e JS

API Rest criada em Node.Js com Express, banco de dados não relacional MongoDB com Mongoose.</br>
Utiliza a arquitetura de camadas MSC (**M**odell-**S**ervice-**C**ontroller).
A API tem como objetivo listar, editar, criar e deletar (CRUD) universidades cadastradas no banco de dados.

## Inicialização via Docker 🐳

Certifique-se de ter o Docker e o Docker Compose instalados em seu computador.

1. Clone o repositório `git@github.com:trkotovicz/crud-mongoose-js.git`
2. Entre na pasta do projeto e rode o comando `docker-compose up -d`
3. Abra o terminal do container `api` com o comando `docker container attach api`, ou se prefirir, acesse o terminal pelo Docker Desktop.
4. Suba a aplicação com `npm start`

O servidor vai estar rodando na porta local 3001 (http://localhost:3001).


# Documentação da API

Utilize o cliente de requisições de sua preferência (Insomnia, Thunderclient, Postman, etc) para fazer as requisições.</br>

## Rotas

<details>
  <summary><strong>GET /universities</strong></summary><br>
  
  Rota responsável por listar todas as universidades cadastradas no banco, podendo filtrar por país e paginação.</br>
  
  | Parâmetros       | Tipo       | Descrição                           |
  | :--------------- | :--------- | :---------------------------------- |
  | `q`, `page`       | `string`   | Os parâmetros não são obrigatórios. `q` busca pelo país / `page` escolhe o número da página |
  
  
  ```http
    http://localhost:3001/universities
  ```

</details>

<details>
  <summary><strong>GET /universities/:id</strong></summary><br>
  
  Rota responsável por buscar uma universidade através de seu `id`.</br>
  
  | Parâmetros       | Tipo       | Descrição                           |
  | :--------------- | :--------- | :---------------------------------- |
  | `id`             | `string`   | Parâmetro obrigatório. `id` deve ser inserido no final do endpoint |
  
    
  ```http
    http://localhost:3001/universities/:id
  ```
  
</details>


<details>
  <summary><strong>POST /universities</strong></summary><br>
  
  Cadastra uma nova universidade.</br>
  Para isso, informe um body em formato JSON, conforme o exemplo abaixo:
  
  ```json
  {
    "alpha_two_code": "BR",
    "web_pages": ["www.site.com"],
    "name": "Universidade Nova do Brasil",
    "country": "Brazil",
    "domains": ["site.com"],
    "state-province": "PR"
  }
  ```
  
  | Parâmetros       | Tipo       | Descrição                           |
  | :--------------- | :--------- | :---------------------------------- |
  | `body`           | `json`     | Parâmetros obrigatórios. `state-province` é opcional |
  
    
  ```http
    http://localhost:3001/universities
  ```
  
</details>

<details>
  <summary><strong>PUT /universities/:id</strong></summary><br>
  
  Edita uma universidade cadastrada.</br>
  Para isso, informe um body em formato JSON, conforme o exemplo abaixo:
  
  ```json
  {
    "web_pages": ["www.minhapagina.com"],
    "name": "NOVO NOME",
    "domains": ["minhapagina.com"]
  }
  ```
  
  | Parâmetros       | Tipo       | Descrição                           |
  | :--------------- | :--------- | :---------------------------------- |
  | `body`, `id`     | `json`, `string`  | Parâmetros obrigatórios. `id` deve ser inserido no final do endpoint |
  
    
  ```http
    http://localhost:3001/universities/:id
  ```
  
</details>

<details>
  <summary><strong>DELETE /universities/:id</strong></summary><br>
  
  Exclui uma universidade cadastrada através de seu `id`.</br>
    
  | Parâmetros       | Tipo       | Descrição                           |
  | :--------------- | :--------- | :---------------------------------- |
  | `id`             | `string`   | Parâmetro obrigatório. `id` deve ser inserido no final do endpoint |
  
    
  ```http
    http://localhost:3001/universities/:id
  ```
  
</details>

---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>

