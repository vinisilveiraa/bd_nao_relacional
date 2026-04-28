# 📗 Banco de Dados Não Relacional

Introdução aos bancos NoSQL, com foco em **MongoDB**, modelagem flexível, escalabilidade e manipulação de documentos.

---

## 🔑 Conceitos Fundamentais

- **NoSQL (Not Only SQL)**  
  Bancos não relacionais que não utilizam tabelas tradicionais. Trabalham com estruturas como documentos, grafos, chave-valor ou colunas.

- **Documento (Document)**  
  Unidade básica de dados no MongoDB (formato semelhante a JSON — BSON).

- **Coleção (Collection)**  
  Conjunto de documentos (equivalente a uma tabela).

- **Banco de Dados (Database)**  
  Conjunto de coleções.

- **Schema Flexível**  
  Diferente de bancos relacionais, os documentos podem ter estruturas diferentes dentro da mesma coleção.

---

## ⚙️ Comandos Básicos do MongoDB

### 🟢 Conexão e Navegação

- `mongosh`  
  Inicia o shell do MongoDB.

- `use meuBanco`  
  Seleciona ou cria um banco de dados.

- `db`  
  Mostra o banco atual.

- `show dbs`  
  Lista os bancos existentes.

- `show collections`  
  Lista as coleções do banco atual.

- `mongosh script.js`
  Rodar um arquivo .js no MongoDB. Ou abrir o mongosh primeiro e usar load("script.js");.

---

### 🟡 Inserção de Dados

- `db.collection.insertOne({...})`  
  Insere um documento.

- `db.collection.insertMany([{...}, {...}])`  
  Insere vários documentos.

---

### 🔵 Consulta de Dados

- `db.collection.find()`  
  Retorna todos os documentos.

- `db.collection.find({ campo: valor })`  
  Filtra documentos.

- `db.collection.findOne()`  
  Retorna apenas um documento.

---

### 🟠 Atualização de Dados

- `db.collection.updateOne(filtro, atualização)`

- `db.collection.updateMany(filtro, atualização)`

Exemplo:

```js
db.users.updateOne(
  { nome: "João" },
  { $set: { idade: 30 } }
)
```

---

### 🔴 Remoção de Dados

- `db.collection.deleteOne(filtro)`

- `db.collection.deleteMany(filtro)`

---

### ⚡ Operadores

#### 🔍 Operadores de Comparação

`$eq`→ igual
`$ne`→ diferente
`$gt`→ maior que
`$gte` → maior ou igual
`$lt` → menor que
`$lte` → menor ou igual

#### 🔗 Operadores Lógicos

`$and` → atende todas as condições
`$or` → atende pelo menos uma das condições
`$not` → não atendem nenhuma
`$nor` → retorna que não correspondem as condições

```js
db.users.find({
  $or: [
    { idade: { $gt: 18 } },
    { nome: "Maria" }
  ]
})
```

#### 🧩 Operadores de Elemento

`$exists` → verifica existência de campo
`$type` → verifica tipo

#### 🔄 Operadores de Atualização

- `$set` → altera ou adiciona um campo
- `$unset` → remove um campo
- `$inc` → incrementa valor numérico
- `$push` → adiciona valor em array
- `$pull` → remove valor de array
- `$addToSet` → adiciona ao array sem duplicar

Exemplo:

```js
db.users.updateOne(
  { nome: "Vini" },
  { 
    $inc: { idade: 1 },
    $set: { ativo: true }
  }
)
```

## 🧠 Modelagem de Dados (IMPORTANTE)

### 📌 Embedding (Documentos Embutidos)

```js
{
  "cliente": "Vini",
  "endereco": {
    "cidade": "Jau",
    "estado": "SP"
  }
}
```

- ✔ Melhor para dados acessados juntos
- ✔ Mais performance (menos queries)

### 🔗 Referencing (Referência)

```js
{
  "cliente_id": "123"
}
```

- ✔ Melhor para dados reutilizáveis
- ✔ Evita duplicação
- ✔ Facilita manutenção

| Situação                       | Melhor escolha |
| ------------------------------ | -------------- |
| Dados sempre juntos            | Embedding      |
| Dados reutilizados             | Referencing    |
| Alta performance leitura       | Embedding      |
| Dados grandes/complexos        | Referencing    |

---

### 🔍 Projeção (Projection)

Seleciona apenas campos específicos da consulta:

```js
db.users.find({}, { nome: 1, _id: 0 })
```

---

### 📊 Ordenação e Limite

- `.sort({ campo: 1 })` → ordem crescente
- `.sort({ campo: -1 })` → ordem decrescente
- `.limit(n)` → limita quantidade de resultados
- `.skip(n)` → pula registros

```js
db.users.find()
  .sort({ idade: -1 })
  .limit(5)
```

---

### 🚀 Boas Práticas

- Evite documentos muito grandes (limite: 16MB)
- Modele baseado nas consultas (query-first)
- Use índices para performance
- Evite normalização excessiva
- Prefira operações simples e diretas

### ⚠️ Erros Comuns

- Modelar como banco relacional
- Criar relações desnecessárias
- Não usar índices
- Ignorar como os dados serão consultados
