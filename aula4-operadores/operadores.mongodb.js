db.produtos.insertMany([
    {
        "_id": 1,
        "nome": "Notebook Dell",
        "categoria": "Eletronicos",
        "preco": 4500,
        "estoque": 15,
        "avaliacao": 4.7
    },

    {
        "_id": 2,
        "nome": "Smartphone Samsung",
        "categoria": "Eletronicos",
        "preco": 2500,
        "estoque": 30,
        "avaliacao": 4.5
    },

    {
        "_id": 3,
        "nome": "Cadeira Gamer",
        "categoria": "Moveis",
        "preco": 1200,
        "estoque": 10,
        "avaliacao": 4.8
    }
])


// ========================
// OPERADORES DE COMPARACAO
// ========================

// $eq -- igual a
// retorna documentos cujo valor seja igual do informado

db.produtos.find({ "preco": { "$eq": 2500 } })


// $ne -- diferente de
// retorna documentos cujo valor seja diferente do informado

db.produtos.find({ "preco": { "$ne": 4500 } })


// $gt -- maior que
// retorna documentos com valor maior q o informado 

db.produtos.find({ "preco": { "$gt": 2000 } })


// $lt -- maior que
// retorna documentos com valor menor q o informado 

db.produtos.find({ "preco": { "$lt": 3000 } })


// $gte / $lte -- maior/menor ou igual
// retorna documentos maiores/menores ou iguais que o informado


db.produtos.find({ "preco": { "$gte": 1000, "$lte": 3000 } })


// ==================
// OPERADORES LOGICOS
// ==================

// $and
// o operador exige que todas as condicoes sejam true

db.produtos.find({
    "$and": [
        { "categoria": "Eletrônicos" },
        { "preco": { "$gt": 3000 } }
    ]
})


// $or
// o operador exige que pelo menos uma das condicoes sejam true

db.produtos.find({
    "$or": [
        { "categoria": "Eletrônicos" },
        { "preco": { "$gt": 4000 } }
    ]
})


// $not
// Este operador nega uma condição específica.

db.produtos.find({
    "preco": {
        "$not": { "$gt": 3000 }
    }
})


// $nor
// O operador $nor é o oposto de $or, excluindo documentos que satisfaçam qualquer uma das condições listadas.

db.produtos.find({
    "$nor": [
        { "categoria": "Eletrônicos" },
        { "preco": { "$gt": 4000 } }
    ]
})


// ======================
// OPERADORES DE ELEMENTO
// ======================

// $exists
// Verifica se um campo está presente ou não em um documento.

db.produtos.find({ "avaliacao": { "$exists": true } })

// $type
// Filtra documentos com base no tipo de dado armazenado em um campo.

db.produtos.find({ "preco": { "$type": "double" } })