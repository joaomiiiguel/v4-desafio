<p align="center">
  <img width="150" src="./src/assets/V4Logo.png" />
</p>

<p align="center">
  Projeto desenvolvido com ReactJs.
</p> 

<img src="./src/assets/screens.png" align="center" />

## Tech

- [ReactJs](https://pt-br.reactjs.org) - Uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
- [Axios](https://github.com/axios/axios) - É um cliente HTTP que funciona tanto no browser quanto em node.js.
- [JSON Server](https://www.npmjs.com/package/json-server) - Uma biblioteca capaz de simular uma API.

## Preview

[Link projeto no Netlify](https://miguel-desafio-v4.netlify.app)

## Development setup

### Prerequisites

Para rodar o projeto no modo de desenvolvimento você precisa ter o básico do [React.js](https://pt-br.reactjs.org), [Axios](https://github.com/axios/axios) e o [JSON Server](https://www.npmjs.com/package/json-server) instalados.

#### Cloning the Repository

```
  git clone https://github.com/joaomiiiguel/v4-desafio.git
```

#### API server

Na pasta do projeto, para iniciar o server(com o JSON Server instalado):

```
 json-server --watch db.json 
```

Agora, se for no browser com [http://localhost:3000/tools] , terá acesso a API gerada pelo arquivo `db.json`.

#### Front-End 

Para iniciar o projeto:

``` 
  npm start
```
