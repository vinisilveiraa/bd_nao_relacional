db.veiculos_rascunho.aggregate([
    {
        $project: {
            _id: 0,
            modelo: 1,
            cor: 1,
            marca: 1,
        }
    },
    { $limit: 10 },
    { $out: "veiculos" }
]);