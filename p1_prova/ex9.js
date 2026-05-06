db.restaurantes.insertMany([
    { "_id": "rest_1", "nome": "Pizzaria Bella", "categoria": "Italiana" },
    { "_id": "rest_2", "nome": "Sushi Express", "categoria": "Japonesa" }
])

db.pedidos.insertMany([
    { "_id": "ped_901", "restaurante_id": "rest_1", "valor": 80.50, "ano": 2026 },
    { "_id": "ped_902", "restaurante_id": "rest_1", "valor": 120.00, "ano": 2026 },
    { "_id": "ped_903", "restaurante_id": "rest_2", "valor": 65.00, "ano": 2026 }
])

// a 
db.restaurantes.aggregate([
    {
        $lookup: {
            from: "pedidos",
            localField: "_id",
            foreignField: "restaurante_id",
            as: "pedido"
        }
    },
    { $unwind: "$pedido" },
    {
        $group: {
            _id: "$nome",
            faturamento_total: {
                $sum: "$pedido.valor"
            }
        }
    }
])






// testes
db.pedidos.insertMany([
    { "_id": "ped_904", "restaurante_id": "rest_1", "valor": 56.00, "ano": 2026 },
    { "_id": "ped_905", "restaurante_id": "rest_1", "valor": 100.00, "ano": 2026 },
    { "_id": "ped_906", "restaurante_id": "rest_2", "valor": 67.00, "ano": 2026 },
    { "_id": "ped_907", "restaurante_id": "rest_2", "valor": 200.00, "ano": 2026 }
])
