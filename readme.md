# Sistema de Gestão de Ingressos para Eventos

Este projeto é um backend desenvolvido para gerenciar a venda de ingressos para eventos. Ele permite o cadastro, consulta, atualização e remoção de ingressos, além de implementar regras de negócio para garantir o controle eficiente das vendas e preços.

## Funcionalidades

- **Cadastrar Ingressos**: Adicionar novos ingressos ao sistema.
- **Listar Ingressos**: Consultar todos os ingressos disponíveis.
- **Consultar Ingresso por ID**: Obter detalhes de um ingresso específico.
- **Atualizar Ingressos**: Editar informações de ingressos existentes.
- **Remover Ingressos**: Excluir ingressos do sistema.
- **Realizar Venda**: Processar a compra de ingressos com controle de estoque e regras de negócio.

## Regras de Negócio

1. **Preço Mínimo por Categoria**:
   - "Pista": mínimo de R$100,00
   - "Pista VIP": mínimo de R$200,00
   - "Camarote": mínimo de R$300,00
   - "Arquibancada": mínimo de R$80,00

2. **Esgotamento de Ingressos**:
   - Se `quantidade_disponivel = 0`, o sistema impede a venda e informa que os ingressos estão esgotados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **PostgreSQL**: Banco de dados relacional.
- **pg**: Biblioteca para conexão com o PostgreSQL.
- **dotenv**: Gerenciamento de variáveis de ambiente.

## Estrutura do Banco de Dados

A tabela `ingressos` contém os seguintes campos:

| Campo                | Tipo de Dado      | Detalhes                              |
|----------------------|-------------------|---------------------------------------|
| `id`                 | SERIAL (PK)      | Identificador único, gerado automaticamente. |
| `evento`             | VARCHAR(255)     | Nome do evento.                       |
| `localizacao`        | VARCHAR(255)     | Local onde acontecerá o evento.       |
| `data_evento`        | DATE             | Data do evento.                       |
| `categoria`          | VARCHAR(50)      | Tipo de ingresso (Pista, VIP, etc.).  |
| `preco`              | DECIMAL(10,2)    | Valor do ingresso.                    |
| `quantidade_disponivel` | INTEGER       | Número de ingressos disponíveis.      |

## Rotas da API

### Ingressos
- **POST /api/ingressos**: Cadastrar um novo ingresso.
- **GET /api/ingressos**: Listar todos os ingressos disponíveis.
- **GET /api/ingressos/:id**: Consultar um ingresso específico.
- **PUT /api/ingressos/:id**: Atualizar um ingresso.
- **DELETE /api/ingressos/:id**: Remover um ingresso.

### Venda
- **POST /api/venda**: Realizar a venda de um ingresso.


## Como Executar o Projeto

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/gihcaron-ATV_Crud_Banco_1803.git
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure o arquivo `.env`**:
    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```
    DB_USERS=seu_usuario
    DB_HOST=localhost
    DB_NAME=nome_do_banco
    DB_PASSWORD=sua_senha
    DB_PORT=sua_porta
    PORT=3000
    ```

4. **Configure o banco de dados**:
    - Certifique-se de que o PostgreSQL está rodando.
    - Crie a tabela `ingressos` no banco de dados:
      ```sql
      CREATE TABLE ingressos (
          id SERIAL PRIMARY KEY,
          evento VARCHAR(255) NOT NULL,
          localizacao VARCHAR(255) NOT NULL,
          data_evento DATE NOT NULL,
          categoria VARCHAR(50) NOT NULL,
          preco DECIMAL(10,2) NOT NULL,
          quantidade_disponivel INTEGER NOT NULL
      );
      ```

5. **Inicie o servidor**:
    ```bash
    node server.js
    ```

6. **Acesse a API**:
    - Acesse `http://localhost:3000/api/ingressos` para listar os ingressos.
    - Use ferramentas como Postman ou Insomnia para testar as rotas.

## Autor

- **Nome:** Giovanna Caron
- **Contato:** giovanna.c.barros@aluno.senai.br
- **GitHub:** [seu-usuario](https://github.com/seu-usuario)
