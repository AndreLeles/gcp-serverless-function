# gcp-serverless-function## 
Usando Google Cloud Platform Serverless Framework : Um guia passo a passo

![doc/img/image01.png](doc/img/image01.png)

## Google - Credenciais
O Serverless Framework precisa ter acesso às credenciais da conta da sua conta do Google Cloud para que ela possa criar e gerenciar recursos em seu nome.

[Link Documentação Site Oficial](https://www.serverless.com/framework/docs/providers/google/guide/credentials)


### Pré-requisitos
- Instale o Node.js (recomendamos a versão 18.x ou superior). Acesse o link baixo para instalação.

[Link Documentação Site Oficial](https://nodejs.org/en/download/package-manager)

```sh
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.12.2`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`
```
- Instale o Serverless Framework globalmente com o comando:

```sh
 npm install -g serverless
```

- Instale as depndencia do projeto:
```sh
 npm install
```

### Implante sua aplicação:

Execute o seguinte comando no terminal para implantar sua aplicação usando o Serverless Framework:

[Link Documentação Site Oficial](https://www.serverless.com/framework/docs/providers/google/guide/services)


```sh
serverless deploy 
```

### Verifique mensagem de logs:

```sh
serverless deploy 
```

### Para consultar o status do serviço 

O método mais simples para verificar se serviço  está ativo é consultar o endpoint de integridade:

```sh
curl http://localhost:4566/_localstack/health | jq
```

## Encerrar o ambiente:
Quando terminar de testar sua aplicação, execute o seguinte comando para encerrar o LocalStack e remover os contêineres Docker:

```sh
npm run infra:down 
```
