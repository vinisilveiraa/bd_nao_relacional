db.infracoes_rascunho.aggregate([
    {
        $project: {
            _id: 0,
            artigo: 1,
            grau: 1,
            pontos: 1,
            valor: 1
        }
    },
    { $limit: 10 },
    { $out: "infracoes" }
]);