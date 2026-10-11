# 🚀 API REST CRUD em Node.js & Express

> API RESTful para gestão completa de recursos (CRUD), desenvolvida utilizando Node.js, Express e integração com base de dados MySQL.

---

## 📌 Sobre o Projeto

Este projeto consiste numa API REST desenvolvida para demonstrar a criação de rotas, manipulação de dados e conexão com base de dados usando **Node.js** e **Express**. 

A arquitetura do projeto foi estruturada seguindo as melhores práticas de separação de responsabilidades (Rotas, Controllers, Services e Models), garantindo facilidade de manutenção, organização e escalabilidade.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no servidor
- **Express.js** — Framework web para construção de APIs REST
- **MySQL** — Base de dados relacional
- **`mysql2`** — Driver de conexão e execução de queries SQL
- **`dotenv`** — Gestão de variáveis de ambiente
- **`cors`** — Middleware para permissão de requisições Cross-Origin

---

## 📁 Estrutura de Pastas

```text
Project_api_crud_node/
├── src/
│   ├── config/          # Configuração de conexão com a Base de Dados (Pool MySQL)
│   ├── controllers/     # Lógica de controlo de requisições e respostas HTTP
│   ├── models/          # Comunicação direta com a Base de Dados (Queries SQL)
│   ├── services/        # Regras de negócio e validações da aplicação
│   ├── routes/          # Definição dos endpoints REST
│   └── app.js           # Configuração de middlewares e rotas do Express
├── .env                 # Variáveis de ambiente (não enviado para o repositório)
├── .env.example         # Modelo de variáveis de ambiente
├── server.js            # Ponto de entrada da aplicação (Start do Servidor)
└── package.json
```

---

## 🔌 Endpoints da API

Abaixo está a documentação detalhada de todas as rotas disponíveis na aplicação.

**Base URL:** `http://localhost:3000/api/users`

| Método | Endpoint | Descrição | Corpo da Requisição (Body) |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Lista todos os utilizadores | *Nenhum* |
| `GET` | `/:id` | Procura um utilizador por ID | *Nenhum* |
| `POST` | `/` | Regista um novo utilizador | `{ "nome": "...", "email": "...", "senha": "..." }` |
| `PUT` | `/:id` | Atualiza dados de um utilizador | `{ "nome": "...", "email": "..." }` |
| `DELETE` | `/:id` | Elimina um utilizador por ID | *Nenhum* |

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js (versão 16+ recomendada)
- MySQL Server (ou MySQL Workbench)
- Git

### 1. Clonar o Repositório
```bash
git clone https://github.com/LeonardoMachadoArroyo/Project_api_crud_node.git
cd Project_api_crud_node
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Configurar a Base de Dados e Variáveis de Ambiente
Crie um ficheiro `.env` na raiz do projeto copiando a estrutura do `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=nome_da_sua_base_de_dados
DB_PORT=3306
```

### 4. Iniciar a Aplicação
```bash
# Modo de desenvolvimento (com auto-reload)
npm run dev

# Ou modo de produção
npm start
```

A API estará disponível e pronta a receber requisições em: `http://localhost:3000`

---

## 👨‍💻 Autor

Desenvolvido por **Leonardo Machado Arroyo**.

- GitHub: [@LeonardoMachadoArroyo](https://github.com/LeonardoMachadoArroyo)