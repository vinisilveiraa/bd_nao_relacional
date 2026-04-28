# ⚙️ Aggregation no MongoDB

O **Aggregation Framework** permite processar dados em múltiplas etapas (pipeline), possibilitando **filtrar, transformar, agrupar e analisar dados** diretamente no banco.

---

## 🧠 O que é Aggregation?

- Funciona como uma **pipeline (linha de produção)**
- Cada etapa transforma os dados
- Muito usado para:
  - Relatórios
  - Estatísticas
  - Dashboards
  - Análises complexas

---

## 🔄 Estrutura Básica

```js
db.collection.aggregate([
  { etapa1 },
  { etapa2 },
  { etapa3 }
])
```

👉 Cada etapa começa com `$`

---

## 🧱 Principais Etapas (Stages)

### 🔍 `$match` → Filtrar dados

Equivalente ao `WHERE`:

```js
db.users.aggregate([
  { $match: { idade: { $gte: 18 } } }
])
```

✔ Sempre tente usar no início (melhor performance)

---

### 📊 `$group` → Agrupar dados

Equivalente ao `GROUP BY`:

```js
db.pedidos.aggregate([
  {
    $group: {
      _id: "$cliente_id",
      total: { $sum: "$valor" }
    }
  }
])
```

✔ `_id` define o agrupamento

---

### 🔢 Operadores de Acumulação

Usados dentro do `$group`:

* `$sum` → soma
* `$avg` → média
* `$max` → maior valor
* `$min` → menor valor
* `$count` → quantidade

Exemplo:

```js
totalPedidos: { $sum: 1 }
```

---

### 🔄 `$project` → Selecionar/transformar campos

```js
db.users.aggregate([
  {
    $project: {
      nome: 1,
      idade: 1,
      maiorDeIdade: { $gte: ["$idade", 18] }
    }
  }
])
```

✔ Cria novos campos
✔ Remove campos

---

### 🔃 `$sort` → Ordenar

```js
{ $sort: { idade: -1 } }
```

---

### 🔢 `$limit` e `$skip`

```js
{ $limit: 5 }
{ $skip: 10 }
```

---

### 🔗 `$lookup` → "JOIN" no MongoDB

```js
db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente"
    }
  }
])
```

✔ Junta dados de outra coleção

---

### 📦 `$unwind` → Desestruturar arrays

```js
{ $unwind: "$itens" }
```

✔ Transforma cada item do array em um documento separado

---

### 🧮 `$addFields` → Adicionar campos

```js
{
  $addFields: {
    totalComTaxa: { $multiply: ["$total", 1.1] }
  }
}
```

---

### 🧹 `$unset` → Remover campos

```js
{ $unset: "campo" }
```

---

## 🧪 Pipeline Completo (Exemplo Real)

```js
db.pedidos.aggregate([
  { $match: { status: "concluido" } },
  {
    $group: {
      _id: "$cliente_id",
      totalGasto: { $sum: "$valor" }
    }
  },
  { $sort: { totalGasto: -1 } },
  { $limit: 5 }
])
```

👉 Retorna os 5 clientes que mais gastaram

---

## ⚡ Boas Práticas

- Use `$match` no início → melhora performance
- Evite pipelines muito longas
- Use índices nos campos filtrados
- Teste etapas separadamente
- Use `$project` para reduzir dados desnecessários

---

## ⚠️ Erros Comuns

- Não entender o fluxo da pipeline
- Usar `$group` sem necessidade
- Não usar índices junto com `$match`
- Trazer dados demais sem filtrar

---

## 📊 Aggregation vs Query Simples

| Situação         | Melhor usar |
| ---------------- | ----------- |
| Consulta simples | `find()`    |
| Relatórios       | Aggregation |
| Agrupamento      | Aggregation |
| Transformação    | Aggregation |

---

## 🧠 Conceitos Importantes

- **Pipeline** → sequência de etapas
- **Stage** → cada operação (`$match`, `$group`, etc.)
- **Acumuladores** → funções dentro do `$group`
- **Transformação de dados** → principal objetivo
