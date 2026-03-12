// 1.
// produtos com preco maior ou igual a 2000
db.produtos.find({
    "preco": { "$gte": 2000 }
})


// 2.
// produtos da categoria moveis com avaliacao maior ou igual a 4.5
db.produtos.find({
    "$and": [
        { "categoria": "Moveis" },
        { "avaliacao": { "$gte": 4.5 } }
    ]
})


// 3.
// produtos com preco menor que 2000 ou estoque maior que 20
db.produtos.find({
    "$or": [
        { "preco": { "$lt": 2000 } },
        { "estoque": { "$gt": 20 } }
    ]
})


// 4.
// produtos com avaliacao
db.produtos.find({
    "avaliacao": { "$exists": true }
})


// 5.
// produtos que nao sejam eletronicos ou com preco maior que 3000
db.produtos.find({
    "$or": [
        { "$nor": [{ "categoria": "eletronicos" }] },
        { "preco": { "$gt": 3000 } }
    ]
})