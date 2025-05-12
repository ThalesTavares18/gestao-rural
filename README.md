
# 🌾 Fazenda São Pedro - Sistema de Gestão

Este é um sistema de gestão para a **Fazenda São Pedro**, desenvolvido com **React**, **Next.js** e **MySQL**, que facilita o controle de **produção**, **vendas**, **estoque**, **planilhas**, **financeiro** e **clientes**.

---

## 🖼️ Tela Inicial

A interface inicial é um painel com acesso rápido às seguintes seções:

- 📈 Produção e Vendas  
- 📦 Estoque  
- 📊 Planilhas  
- 💰 Financeiro  
- 🧑‍🤝‍🧑 Meus Clientes  

Cada botão leva a uma página específica do sistema.

**Componente:** `Inicio.jsx`  
**Estilos:** `inicio.css`

---

## 💰 Módulo Financeiro

Tela para consulta de vendas por **data**, **semana** ou **mês**.  
Utiliza `axios` para buscar dados de vendas em endpoints da API e exibe os resultados em uma tabela.

### Funcionalidades

- 📅 Seleção de data específica
- 📆 Consulta de vendas semanais e mensais
- 📊 Tabelas dinâmicas
- 🔔 Feedback com `react-toastify` para ausência de vendas

**Componente:** `Financeiro.jsx`  
**Estilos:** `financeiro.css`

---

## 📡 API de Produtos

API RESTful para gerenciamento de **produtos** e **estoques**.

### Endpoints

#### `GET /api/produtos`

Retorna todos os produtos cadastrados.

```json
[
  {
    "id": 1,
    "nome": "Tomate",
    "preco": 10.5,
    "quantidade": 100
  }
]
```

#### `POST /api/produtos`

Cadastra um novo produto e registra sua quantidade inicial no estoque.

**Corpo:**
```json
{
  "nome": "Cenoura",
  "preco": 5.2,
  "quantidade": 50
}
```

**Resposta:**
```json
2
```

#### `PUT /api/produtos`

Atualiza um produto e sua quantidade no estoque.

**Corpo:**
```json
{
  "id": 1,
  "nome": "Tomate Atualizado",
  "preco": 11.0,
  "quantidade": 80
}
```

**Resposta:**
```json
true
```

---

### 🗃️ Banco de Dados

O sistema espera duas tabelas principais no banco MySQL:

#### `produtos`
| Campo      | Tipo     | Descrição             |
|------------|----------|------------------------|
| id         | INT      | Chave primária         |
| nome       | VARCHAR  | Nome do produto        |
| preco      | DECIMAL  | Preço unitário         |
| quantidade | INT      | Quantidade atual       |

#### `estoque`
| Campo       | Tipo     | Descrição                            |
|-------------|----------|---------------------------------------|
| id_produto  | INT      | Relacionado ao produto                |
| quantidade  | INT      | Quantidade inserida                  |
| entrada     | BOOLEAN  | `1` para entrada, pode expandir uso  |

---

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MySQL](https://www.mysql.com/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📁 Estrutura

```
/
├─ app/
│  ├─ api/produtos/route.js
│  ├─ lib/
│  │  └─ conexao.js
│  ├─ page.jsx
│  ├─ financeiro/
│  │  └─ Financeiro.jsx
│  └─ inicio/
│     └─ Inicio.jsx
├─ public/
│  └─ logo.png
├─ styles/
│  ├─ inicio.css
│  └─ financeiro.css
├─ README.md
```

---

## 📌 Requisitos

- Node.js
- MySQL com banco configurado
- `.env` com variáveis de conexão ao banco
