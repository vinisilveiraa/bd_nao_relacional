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
            cor: 1
        }
    },
    { $limit: 10 },
    { $out: "veiculos" }
]);