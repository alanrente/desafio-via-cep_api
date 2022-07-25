<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) repositório inicial do framework Typescript

---

# Pré configuração

- ### Com docker:
  - Se opinar por rodar com o docker o mesmo já cria e executa uma instância do PostgreSQL, podendo ser acessada através das configurações abaixo:
  ```bash
  USER=postgres
  PASSWORD=desafioviacep
  DATABASE=desafioviacep
  ```
- ### Com Yarn será necessário ter instalado a versão **14.20** do **NodeJs**, instalar o **yarn** e deverá ter o banco de dados **PostgreSQL**:

  - Após instalar o NodeJs rode os comandos abaixo:

  ```bash
  $ npm i -g yarn

  $ npm i -g corepack
  ```

  - Há um arquivo **.env** que contém as seguintes variáveis:

    ```
    DB_USERNAME="valor"
    DB_PASSWORD="valor"
    DB_DATABASE="valor"
    DB_SCHEMA="valor"
    ```

    onde deverá conter as informações do seu banco PostgreSQL
    <br/>
    <br/>

## Instalação:

- ### Com yarn:

```bash
$ git clone https://github.com/alanrente/desafio-via-cep_api.git
$ cd desafio-via-cep_api
$ yarn
```

- ### Com Docker:

```bash
$ git clone https://github.com/alanrente/desafio-via-cep_api.git
$ cd desafio-via-cep_api
$ docker-compose build
```

## Execução:

- ### Com yarn:

```bash
# watch mode
$ yarn start:dev
```

- ### Com Docker:

```bash
$ docker-compose up
```
