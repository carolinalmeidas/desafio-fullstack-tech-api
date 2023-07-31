<h1 align ='center'>CONTACT API</h1>

Essa é uma aplicação CONTACT API com objetivo de facilitar a gestão de seus contatos. 

## Endpoints
A API possue endpoints para cadastrar usuário, realizar login, cadastrar contatos e fazer atuzalização dos seus contatos.

<a href="https://insomnia.rest/run/?label=BookWise%20API&uri=https%3A%2F%2Fgithub.com%2FBookWise-API%2Fbookwise-api%2Fblob%2Fmain%2FBookWise_InsomniaProject" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

<blockquote> Para importar o JSON no Insomnia é só clicar no botão "Run in Insomnia". Depois é só seguir os passos que ele irá importar todos os endpoints em seu insomnia.
</blockquote>
<br>

## UTILIZAR API LOCALMENTE:
1) Clonar o repositório em sua maquina.
2)  Configurar as variáveis de ambiente conforme arquivo .env.example
3)  Instar todas as dependências do projeto: COMANDO npm run dev
4)  Rodas aplicação: npm run dev



# Criação de usuário:

POST /users - FORMATO DA REQUISIÇÃO
<br>

```json
{
	"name": "Kenzinho",
	"password":"12345678",
	"email": "kenzinho@kenzie.com.br",
	"phone": "9999999-9999"
}
```
Caso dê tudo certo, a resposta será assim:
POST /users/  - FORMATO DA RESPOSTA - STATUS 201
```json
{
	{
	"id": 1,
	"name": "Kenzinho",
	"email": "kenzinho@kenzie.com.br",
	"phone": "9999999-9999",
	"createdAt": "2023-07-31"
}
```

# Login:

POST /login - FORMATO DA REQUISIÇÃO
```json
{
	"email": "kenzinho@kenzie.com.br",
	"password":"12345678"
}
```

Caso dê tudo certo, a resposta será assim:

POST /users/login/ - FORMATO DA RESPOSTA - STATUS 200
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MTkwNTUyLCJpYXQiOjE2ODkxMDQxNTIsImp0aSI6IjhhY2Q5M2YwMTkxMTQ5NTU4M2E5YjA3YzI3YTU2MTM4IiwidXNlcl9pZCI6MX0.9Q0nQt6vQjO7H0JOT8Tio6qRvp0dfmH8uCoKkvkk5eI"
}
```

<h2>Rotas que necessitam de autorização</h2>

<h5 align ='center'>Atualizar Usuário</h3>

PATCH /users/id - FORMATO DA REQUISIÇÃO 

```json
{
  	"name": "Kenzie",
}
```

Caso dê tudo certo, a resposta será assim:
POST /users/id - FORMATO DA RESPOSTA - STATUS 200
```json
{
	
	"id": 1,
	"name": "Kenzie",
	"email": "kenzinho@kenzie.com.br",
	"phone": "9999999-9999"",
	"createdAt": "2023-07-31"

}

```

<h5 align ='center'>Deletar Usuário</h5>
DELETE /users - FORMATO DA REQUISIÇÃO
Não tem corpo da requisição


<h5 align ='center'>Listar Usuário</h5>
GET /users - FORMATO DA REQUISIÇÃO

```json

Não tem corpo da requisição

```

Caso dê tudo certo, a resposta será assim:
GET /users - FORMATO DA RESPOSTA - STATUS 200
```json
{
	
	"id": 1,
	"name": "Kenzie",
	"email": "kenzinho@kenzie.com.br",
	"phone": "9999999-9999"",
	"createdAt": "2023-07-31"

}

```

<h5 align ='center'>Cadastrar Contato</h5>
POST /contacts - FORMATO DA REQUISIÇÃO

```json
{
	"name": "Ana",
	"email": "ana@mail.com",
	"phone": "3199999-9999"
}
```
Caso dê tudo certo, a resposta será assim:
POST /contacts - FORMATO DA RESPOSTA - STATUS 201
```json
{
	
	"id": 1,
	"name": "Ana",
	"email": "ana@mail.com",
	"phone": "3199999-9999",
	"createdAt": "2023-07-31"

}

```

<h5 align ='center'>Listar todos Contatos</h5>
GET /contacts - FORMATO DA REQUISIÇÃO

```json

Não tem corpo da requisição

```

Caso dê tudo certo, a resposta será assim:
GET /users - FORMATO DA RESPOSTA - STATUS 200
```json
[
  {
  	
  	"id": 1,
  	"name": "Ana",
  	"email": "ana@mail.com",
  	"phone": "3199999-9999",
  	"createdAt": "2023-07-31"
  
  }
  {
  	
  	"id": 2,
  	"name": "Carol",
  	"email": "carol@mail.com",
  	"phone": "3198999-9999",
  	"createdAt": "2023-07-31"
  }
]
```


<h5 align ='center'>Listar um Contato</h5>
GET /contacts/id - FORMATO DA REQUISIÇÃO

```json

Não tem corpo da requisição

```

Caso dê tudo certo, a resposta será assim:
GET /users - FORMATO DA RESPOSTA - STATUS 200
```json
  {
  	
  	"id": 1,
  	"name": "Ana",
  	"email": "ana@mail.com",
  	"phone": "3199999-9999",
  	"createdAt": "2023-07-31"
  
  }
```


<h5 align ='center'>Atualizar Contato</h3>

PATCH /contacts/id - FORMATO DA REQUISIÇÃO 

```json
{
  	"name": "Ana Carolina",
}
```

Caso dê tudo certo, a resposta será assim:
POST /users/id - FORMATO DA RESPOSTA - STATUS 200
```json
{
	
        "id": 1,
        "name": "Ana Carolina",
        "email": "ana@mail.com",
        "phone": "3199999-9999",
        "createdAt": "2023-07-31"

}

```

<h5 align ='center'>Deletar Contato</h5>
DELETE /contacts/id - FORMATO DA REQUISIÇÃO
Não tem corpo da requisição


