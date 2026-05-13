
# ⚡ Índices no MongoDB

Os **índices** são estruturas de dados que melhoram significativamente a performance das consultas no MongoDB, permitindo encontrar documentos sem precisar varrer toda a coleção.

---

## 🧠 O que são Índices?

- Funcionam como o índice de um livro
- Evitam **collection scan** (varredura completa)
- Melhoram consultas (`find`, `sort`, `aggregate`)
- Podem aumentar o custo de escrita (insert/update)

---

## 🚀 Criando Índices

### 📌 Índice Simples

```js
db.users.createIndex({ nome: 1 })
```

- `1` → ordem crescente
- `-1` → ordem decrescente

---

### 📌 Índice Composto

```js
db.users.createIndex({ nome: 1, idade: -1 })
```

✔ Usado quando consultas envolvem múltiplos campos
✔ Ordem dos campos importa!

---

### 📌 Índice Único (Unique)

```js
db.users.createIndex({ email: 1 }, { unique: true })
```

✔ Garante que não haja valores duplicados
✔ Muito usado para login/email

---

### 📌 Índice em Campo de Array (Multikey)

```js
db.posts.createIndex({ tags: 1 })
```

✔ Cada valor do array vira uma entrada no índice

---

### 📌 Índice Textual

```js
db.posts.createIndex({ conteudo: "text" })
```

✔ Permite busca por texto:

```js
db.posts.find({ $text: { $search: "mongodb" } })
```

---

### 📌 Índice TTL (Tempo de Vida)

```js
db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
```

✔ Remove documentos automaticamente após um tempo

---

## 🔍 Ver Índices

```js
db.users.getIndexes()
```

---

## ❌ Remover Índices

```js
db.users.dropIndex("nome_1")
```

Ou remover todos:

```js
db.users.dropIndexes()
```

---

## ⚙️ Como o MongoDB Usa Índices

Quando você faz uma query:

```js
db.users.find({ nome: "Vini" })
```

- Com índice → busca rápida
- Sem índice → **collection scan (lento)**

---

## 📊 Índices e Ordenação

```js
db.users.find().sort({ nome: 1 })
```

✔ Se houver índice → rápido
❌ Sem índice → lento (precisa ordenar tudo)

---

## ⚠️ Ordem em Índices Compostos

```js
db.users.createIndex({ nome: 1, idade: 1 })
```

✔ Funciona para:

```js
{ nome: "Vini" }
{ nome: "Vini", idade: 20 }
```

❌ NÃO funciona bem para:

```js
{ idade: 20 }
```

👉 Regra: **sempre respeita a ordem dos campos**

---

## 📉 Impactos dos Índices

### 👍 Vantagens

- Consultas muito mais rápidas
- Melhor performance em filtros e ordenações
- Essencial para sistemas reais

### 👎 Desvantagens

- Consome mais memória
- Deixa inserts/updates mais lentos
- Excesso de índices prejudica performance

---

## 🧪 Analisando Performance

### 📌 explain()

```js
db.users.find({ nome: "Vini" }).explain("executionStats")
```

Você verá:

- `COLLSCAN` → ruim (sem índice)
- `IXSCAN` → bom (usando índice)

---

## 🧠 Boas Práticas

- Crie índices para campos usados em:

  - filtros (`find`)
  - ordenação (`sort`)
  - joins simulados (`lookup`)
- Evite criar índices desnecessários
- Use índices compostos para queries complexas
- Analise com `explain()` antes e depois

---

## ⚠️ Erros Comuns

- Criar índice em tudo
- Ignorar ordem em índices compostos
- Não analisar performance
- Achar que índice sempre melhora tudo
