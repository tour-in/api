# Iniciar este projeto

```sh
npm start / npm run dev (Uso de nodemon) 
```

#### Executar a primeira vez

```sh
npm install
npm start / npm run dev (Uso de nodemon) 
```

#### MYSQL e Phpmyadmin

Iniciar:
```sh
docker-compose up -d
```

Finalizar:
```sh
docker-compose down
```

Acessar:
```sh
http://localhost:8081/index.php
```

#### MailHog
```
http://localhost:8025
```

#### Criando tabelas migrate

```sh
npx sequelize-cli db:migrate
```

#### Rodando seed

```sh
npx sequelize-cli db:seed:all
```

#### Criando uma tabela

```sh
npx sequelize-cli model:create --name NomeTabela --attributes nome_campo:string
```
# Iniciar este projeto

```sh
npm start / npm run dev (Uso de nodemon) 
```

#### Executar a primeira vez

```sh
npm install
npm start / npm run dev (Uso de nodemon) 
```

#### MYSQL e Phpmyadmin

Iniciar:
```sh
docker-compose up -d
```

Finalizar:
```sh
docker-compose down
```

Acessar:
```sh
http://localhost:8081/index.php
```
#### Criando tabelas migrate

```sh
npx sequelize-cli db:migrate
```

#### Rodando seed

```sh
npx sequelize-cli db:seed:all
```

#### Criando uma tabela

```sh
npx sequelize-cli model:create --name NomeTabela --attributes nome_campo:string
```