db.vendas.insertMany([
    { "_id": 1, "setor": "Hortifruti", "valor_total": 150, "ano": 2026 },
    { "_id": 2, "setor": "Açougue", "valor_total": 300, "ano": 2026 },
    { "_id": 3, "setor": "Hortifruti", "valor_total": 80, "ano": 2025 }
])

// a 
db.vendas.aggregate([
    {
        $match: { ano: 2026 }
    },
    {
        $group: {
            _id: "$setor",
            faturamento: {
                $sum: "$valor_total"
            }
        }
    },
    {
        $sort: { faturamento: -1 }
    }
])









// testes
db.vendas.insertMany([
    { "_id": 4, "setor": "Hortifruti", "valor_total": 200, "ano": 2026 },
    { "_id": 5, "setor": "Açougue", "valor_total": 100, "ano": 2026 },
    { "_id": 6, "setor": "Hortifruti", "valor_total": 100, "ano": 2025 }
])

