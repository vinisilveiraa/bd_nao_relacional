db.pedido.insertOne({
    cliente_id: 1,
    data: Date(),
    itens: [
        {
            produto_id: 1,
            preco: 99.99,
            quantidade: 1,
            total_unitario: 99.99
        }
    ]
});

db.pedido.aggregate([
    {
        $lookup: {
            from: "cliente",
            localField: "cliente_id",
            foreignField: "_id",
            as: "cliente_info"
        }
    }
]);


db.produto.insertMany([
    {
        _id: 2,
        nome: "Tablet",
        preco: 250.00,
        categoria: "Eletrônicos"
    },
    {
        _id: 3,
        nome: "Foninho",
        preco: 150.00,
        categoria: "Eletrônicos"
    },
    {
        _id: 4,
        nome: "Cadeira Ergonomica",
        preco: 3000.00,
        categoria: "Moveis"
    },
]
);

db.pedido.aggregate([
    {
        $project: {
            cliente_id: 1,
            data: 1,
            itens: 1, // remova caso nao queira mostrar os itens
            valor_total_compra: {
                $sum: {
                    $map: {
                        input: "$itens",
                        as: "item",
                        in: "$$item.total_unitario"
                    }
                }
            }
        }
    }
]);