db.veiculos_rascunho.aggregate([
    {
        $project: {
            _id: 0,
            placa: 1,
            cadastro: {
                $floor: {
                    $multiply: [{ $rand: {} }, 100]
                }
            },

            modelo: 1,
            marca: 1,
            cor: 1,
        }
    },
    { $limit: 10 },
    { $out: "veiculos" }
]);



// atribui um proprietario aleatorio para cada veiculo
db.veiculos.aggregate([
    {
        $lookup: {
            // vai na tabela proprietarios
            from: "proprietarios",
            pipeline: [
                { $sample: { size: 1 } }
                // pega um documento aleatorio
            ],
            as: "prop"
            // nomeia como prop
        }
    },
    {
        $unwind: "$prop" // transforma em obj simples   
    },
    {
        $set: {
            // pega o _id de $prop
            proprietario_id: "$prop._id"
        }
    },
    {
        $project: {
            prop: 0
        }
    },
    {
        $merge: {
            into: "veiculos",
            whenMatched: "merge",
            whenNotMatched: "discard"
        }
    }
])