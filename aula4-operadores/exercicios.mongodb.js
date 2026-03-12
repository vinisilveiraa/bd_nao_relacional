// 1.
db.produtos.find({
    "preco": { "$gte": 2000 }
})


// 2.
db.produtos.find({
    "$and": [
        { "categoria": "Moveis" },
        { "avaliacao": { "$gte": 4.5 } }
    ]
})


// 3.
db.produtos.find({
    "$or": [
        { "preco": { "$lt": 2000 } },
        { "estoque": { "$gt": 20 } }
    ]
})


// 4.
db.produtos.find({
    "avaliacao": { "$exists": true }
})


// 5.
db.produtos.find({
    "$or": [
        { "$nor": [{ "categoria": "eletronicos" }] },
        { "preco": { "$gt": 3000 } }
    ]
})