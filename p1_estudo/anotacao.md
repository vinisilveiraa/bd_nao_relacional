# Estrutura do Aggregation

```js
db.collection.aggregate([
  { $match: {} },
  { $group: {} },
  { $sort: {} },
  { $limit: n }
])
```

sempre pensar no **pipeline (passo a passo)**

---

## `$group`

```js
{
  $group: {
    _id: "$campo",
    resultado: { operador }
  }
}
```

- usar `_id: null` pega a coleção inteira, não agrupando por nada em específico

---

## Operadores pra guardar

| Operador         | Função |
| ---------------- | ------ |
| `$sum: 1`        | contar |
| `$sum: "$campo"` | somar  |
| `$avg: "$campo"` | média  |
| `$max`           | maior  |
| `$min`           | menor  |

---

### Campos com $

lembrar de colocar $

```js
"$campo"  ✅
"campo"   ❌
```

---

### `$match`

```js
{ $match: { campo: valor } }
```

- Funciona como WHERE

---

### `$sort`

```js
{ $sort: { campo: -1 } }
```

- `1` → crescente
- `-1` → decrescente

---

### `$limit`

```js
{ $limit: 5 }
```

- LEMBRA DE COLOCAR SORT PRIMEIRO

---

### Datas

```js
{ $month: "$data" }
{ $year: "$data" }
```

- Só funciona se for `Date`
- Se não for tem que dar AddFields (tem exemplo disso)

---

## Sum

### - Contar

```js
$sum: 1
```

---

### - Somar

```js
$sum: "$campo"
```

---

### - Média

```js
$avg: "$campo"
```

---

- esquecer `$` nos campos
- usar string em vez de campo
- esquecer `$sort` antes do `$limit`
- usar `$match` antes do `$group` quando depende de cálculo
- confundir `$sum: 1` com `$sum: "$campo"`

---

# Modelagem

- Use **embedding** quando:
  - dados são acessados juntos

- Use **referencing** quando:
  - dados são grandes ou reutilizados
